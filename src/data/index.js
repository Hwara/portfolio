export const PROFILE = {
  name: "박진영",
  nameEn: "Jinyeong Park",
  role: "Cloud/Infra Engineer",

  bio: "하드웨어 회로부터 클라우드 인프라까지, 시스템 전 계층을 직접 다뤄본 엔지니어입니다.",
  about: [
    "저는 5년 이상 하드웨어/펌웨어 개발 분야에서 다양한 전자 제품을 설계하고 구현해 왔습니다.",
    "그리고 제가 일하고 싶던 분야인 클라우드 및 인프라 분야로 직무변환을 위해 클라우드 네이티브 엔지니어링 과정 부트캠프를 수료하였습니다.",
    "열심히 한 결과 부트캠프 우수 수료생으로 선정되었으며 CKA와 같은 인프라 관련 자격증을 취득하였습니다.",
    "다양한 트러블슈팅 경험을 통해 장애 발생 시 빠르게 대응합니다. 또한 자동화를 통한 안정적이고 신속한 업무 처리를 중시합니다.",
    "어렵고 힘든 일을 만나도 책임감을 가지고 끝까지 포기하지 않고 임무를 완수합니다.",
    "내 의견만 내세우지 않고 상대방의 의견을 존중하며 협업을 위해 노력합니다.",

  ],
  contact: { email: "hwara1221@gmail.com", location: "부산, 대한민국" },
  stats: [
    { num: "5+", label: "Years Experience" },
    { num: "6", label: "Projects Done" },
    { num: "24", label: "Age(만 나이)" },
  ],
  skills: [
    "Kubernetes", "Terraform", "AWS Cloud", "Git", "GitHub Actions",
    "ArgoCD", "Prometheus", "Grafana", "Loki",
  ],
  social: [
    { label: "GitHub", href: "https://github.com/Hwara" },
    { label: "Email", href: "mailto:hwara1221@gmail.com" },
  ],
};

export const EXPERIENCES = [
  {
    period: "2019 — 2025",
    company: "(주)솔루윈스",
    role: "기업부설연구소 주임연구원",
    desc: [`주로 측정/제어 하드웨어 및 펌웨어 개발을 담당하며 제품 개발 및 시제품 제작, 테스트까지 전반적인 프로젝트 실무를 주도하였습니다.
      `,]
  },
];

export const CERTIFICATE = [
  {
    date: "2025.11",
    organization: "주식회사구름",
    name: "구름톤 딥다이브 클라우드 네이티브 엔지니어링 개발자 과정 4회차",
    state: "우수 수료생 선정"
  },
  {
    date: "2025.08",
    organization: "Linux Foundation",
    name: "Certified Kubernetes Administrator(CKA)",
    state: "최종 합격"
  },
  {
    date: "2022.11",
    organization: "한국산업인력공단",
    name: "정보처리기사",
    state: "최종 합격"
  },
  {
    date: "2019.04",
    organization: "한국산업인력공단",
    name: "2019년 부산 지방기능경기대회",
    state: "우수상"
  },
  {
    date: "2018.10",
    organization: "힌국폴리텍이사장",
    name: "제4회 전국 고교생 드론 기술경진대회 드론 자율주행 부문",
    state: "금상"
  },
  {
    date: "2018.09",
    organization: "한국산업인력공단",
    name: "전자기기기능사",
    state: "최종 합격"
  },
  {
    date: "2018.06",
    organization: "한국산업인력공단",
    name: "전기기능사",
    state: "최종 합격"
  },
  {
    date: "2017.07",
    organization: "대한상공회의소",
    name: "컴퓨터활용능력 2급",
    state: "최종 합격"
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "티켓 예매 서비스 및 운영 효율화를 위한 백오피스 시스템",
    desc: "티켓 예매 서비스라는 제품과 이를 효율적으로 운영하기 위한 백오피스 시스템의 설계 및 구현",
    tags: ["React", "Spring Boot", "PostgreSQL", "Redis", "AWS Cloud", "GitHub Actions",
      "SonarQube", "OWASP Dependency Check", "OWASP ZAP", "MSA",
      "Terraform", "Ansible", "Kubernetes", "ArgoCD", "Prometheus", "Grafana", "Loki", "Falco", "Velero"],
    category: "Infra",
    year: "2025",
    emoji: "◎",
  },
  {
    id: 2,
    title: "소형 전력 측정 장치",
    desc: "분전반 내 전기 차단기에 부착되는 소형 전력 측정 장치 개발 및 지속적인 개선",
    tags: ["회로설계", "PCB Artwork", "Altium", "STM32", "C", "Python",
      "RS232", "RS485 MODBUS", "SPI"],
    category: "Hardware",
    year: "2020~2025",
    emoji: "⬡",
  },
  {
    id: 3,
    title: "화재 방송시스템 컨트롤 보드",
    desc: "화재가 발생했을 때 원활한 대피방송을 하기 위한 방송시스템을 제어하는 장치 개발",
    tags: ["회로설계", "PCB Artwork", "Altium", "STM32", "C", "RS232"],
    category: "Hardware",
    year: "2021~2023",
    emoji: "◈",
  },
  {
    id: 4,
    title: "산소발생기 제어보드",
    desc: "산소를 발생시키는 장치를 제어하는 장치 개발",
    tags: ["회로설계", "PCB Artwork", "Altium", "STM32", "C", "SPI", "LCD", "IR",],
    category: "Hardware",
    year: "2021~2022",
    emoji: "▦",
  },
  {
    id: 5,
    title: "무선 주파수 신호발생기 제어 프로그램",
    desc: "무선 주파수 신호발생기를 제어하는 윈도우 GUI 프로그램을 C#을 이용하여 개발",
    tags: ["C#", "Ethernet", "USB Serial"],
    category: "Software",
    year: "2023",
    emoji: "◻",
  },
  {
    id: 6,
    title: "RS485 Modbus RTU 통신 기반 자사 제품 검사 프로그램",
    desc: "자사 제품을 테스트하기 위한 Debugging 및 Logging 프로그램 개발",
    tags: ["Python", "RS485 Modbus", "PyQt5", "SQLite3", "MariaDB", "Log"],
    category: "Software",
    year: "2020~2025",
    emoji: "▷",
  },
];
