import re, pathlib

p = pathlib.Path(r"C:\Users\Dell\Documents\MMCP-SECURITY-ZAI\src\lib\data\mmcp.ts")
s = p.read_text(encoding="utf-8")

MAP = {
    "ed8eaca9142f": "control-room",
    "7e788e0cf906": "armed-response",
    "88f03d9f1cc0": "patrol",
    "a993702d8990": "ground",
    "06dea44b6063": "night",
    "4054ab90492c": "k9",
    "b6f995084bed": "aerial",
    "42d9a10a216c": "surveillance",
    "cd62c9a7c397": "close-protection",
    "50ac281e840c": "estate",
    "25a74dac4f9d": "commercial",
    "9f48cb345d8a": "surveillance",
    "3f5249ad854a": "alarm",
    "9274e44e6e08": "commercial",
    "8700d40f3f8b": "ground",
    "ca421bd890be": "farm",
    "4a6e96896df7": "estate",
    "ba816881a9d4": "portrait-operations",
}

for k, v in MAP.items():
    s = s.replace("${C}/%s.jpg" % k, "/img/%s.webp" % v)
    s = s.replace("${C}/%s.jpeg" % k, "/img/%s.webp" % v)

s = re.sub(r'(?m)^const C = "https://z-cdn\.chatglm\.cn/[^"]*";\r?\n\r?\n', "", s)

op_type_old = """export type Operator = {
  id: string;
  name: string;
  role: string;
  grade: string;
  image: string;
};"""
op_type_new = """export type Operator = {
  id: string;
  /** No personal names are published: the post is the identity. */
  role: string;
  grade: string;
  image: string;
};"""

ops_old = re.search(r"export const operators: Operator\[\] = \[.*?\n\];", s, re.S)
assert ops_old, "operators array not found"
ops_new = """export const operators: Operator[] = [
  {
    id: "o1",
    role: "Operations Director",
    grade: "PSIRA Grade A \u00b7 18 yrs",
    image: "/img/portrait-operations.webp",
  },
  {
    id: "o2",
    role: "Head, Armed Response",
    grade: "PSIRA Grade E \u00b7 14 yrs",
    image: "/img/portrait-armed.webp",
  },
  {
    id: "o3",
    role: "Watch Floor Lead",
    grade: "PSIRA Grade B \u00b7 11 yrs",
    image: "/img/portrait-watch.webp",
  },
  {
    id: "o4",
    role: "Close Protection Lead",
    grade: "PSIRA Grade E \u00b7 16 yrs",
    image: "/img/portrait-close.webp",
  },
];"""

s = s.replace(op_type_old, op_type_new)
s = s.replace(ops_old.group(0), ops_new)
s = s.replace('signoff: "\u2014 T. Mahasha, Operations Director",', 'signoff: "\u2014 MMCP Securities, Polokwane",')

p.write_text(s, encoding="utf-8")

print("remote refs left:", s.count("z-cdn") + s.count("${C}"))
print("names left:", sum(x in s for x in ["Mahasha", "Chauke", "Mokwena", "Nkuna"]))
print("ops ok:", 'role: "Watch Floor Lead"' in s)
