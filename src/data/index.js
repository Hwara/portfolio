export const PROFILE = {
  name: "박진영",
  nameEn: "Jinyeong Park",
  role: "Cloud/Infra Engineer",

  bio: "하드웨어 회로부터 클라우드 인프라까지, 시스템 전 계층을 직접 다뤄본 경험이 있습니다.",
  about: [
    "하드웨어/펌웨어 개발 분야에서 5년을 보내고, 클라우드 네이티브 엔지니어링으로 전환한 개발자입니다.",
    "현재는 Kubernetes, Terraform, AWS를 중심으로 인프라 자동화와 운영 효율화에 집중하고 있습니다.",
    "중학생 때부터 서버와 인프라에 관심이 있었지만, 가정 형편으로 전기/전자 전공 실업계 고등학교에 진학했습니다. 졸업 후 산업용 전력 측정 제품을 개발하는 회사에서 회로 설계부터 펌웨어, 소프트웨어까지 혼자 제품 하나를 처음부터 끝까지 만드는 경험을 5년간 쌓았습니다. 그리고 본래 관심사였던 클라우드/인프라로 직무 전환하기로 결심했습니다.",
    "하드웨어 개발을 통해 다양한 트러블슈팅 경험을 얻게 되었습니다. 노이즈 신호로 인한 오류 동작을 해결하기 위해 수십 번의 시제품을 제작하는 끈기를 가지며 문제를 좁혀가는 과정을 반복하였고 결국 문제를 해결하였습니다.",
    "이 경험은 클라우드 인프라에서도 그대로 이어져 Calico CNI 네트워크 장애에서 표면적 오류(DNS 에러) 너머의 근본적인 원인 (BGP/VXLAN 포트 차단)을 찾아내는 기반이 되었습니다. 이처럼 계층을 넘나들며 원인을 추적하는 사고방식은 하드웨어 디버깅을 통해 만들어질 수 있었습니다.",
    "앞으로의 목표는 코드와 인프라의 경계를 자유롭게 넘나드는 엔지니어가 되는 것 입니다.",
    "부트캠프 프로젝트에서 팀원이 건강 문제로 잠시 빠지게 되어 인프라 전반을 혼자 담당하게 된 상황에서도 Terraform IaC, Kubernetes 클러스터 구축, 보안 시스템까지 기존 목표한 기능 구현을 완료하였습니다.",
  ],
  contact: { email: "hwara1221@gmail.com", location: "부산, 대한민국" },
  stats: [
    { num: "5+", label: "Years Experience" },
    { num: "6", label: "Projects Done" },
    { num: "7", label: "자격 취득" },
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
    desc: [`주로 측정/제어 하드웨어 및 펌웨어 개발을 담당하며 회로 설계, PCB 제작, 펌웨어 개발 및 테스트까지 포함한 전반적인 프로젝트 실무를 주도하였고, RS485 Modbus, SPI, I2C, CAN 등 산업용 통신 프로토콜 기반 제품을 설계하고 공장에 테스트베드 설치를 수행했습니다.`]
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
    organization: "한국폴리텍이사장",
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
    title: "공연 티켓팅 서비스 및 운영 효율화를 위한 백오피스 시스템",
    desc: "공연 티켓팅 서비스 라는 제품과 이를 효율적으로 운영하기 위한 백오피스 시스템의 설계 및 구현",
    tags: ["Kubernetes", "Terraform", "AWS Cloud",
      "GitHub Actions", "ArgoCD", "Falco",
      "Docker", "Linux", "Git",],
    category: "Infra",
    year: "2025",
    emoji: "◎",
    github: "https://github.com/Hwara/ddcn41-project",
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
    github: null,
  },
  {
    id: 3,
    title: "화재 방송시스템 컨트롤 보드",
    desc: "화재가 발생했을 때 원활한 대피방송을 하기 위한 방송시스템을 제어하는 장치 개발",
    tags: ["회로설계", "PCB Artwork", "Altium", "STM32", "C", "RS232"],
    category: "Hardware",
    year: "2021~2023",
    emoji: "◈",
    github: null,
  },
  {
    id: 4,
    title: "산소발생기 제어보드",
    desc: "산소를 발생시키는 장치를 제어하는 장치 개발",
    tags: ["회로설계", "PCB Artwork", "Altium", "STM32", "C", "SPI", "LCD", "IR",],
    category: "Hardware",
    year: "2021~2022",
    emoji: "▦",
    github: null,
  },
  {
    id: 5,
    title: "무선 주파수 신호발생기 제어 프로그램",
    desc: "무선 주파수 신호발생기를 제어하는 윈도우 GUI 프로그램을 C#을 이용하여 개발",
    tags: ["C#", "Ethernet", "USB Serial"],
    category: "Software",
    year: "2023",
    emoji: "◻",
    github: null,
  },
  {
    id: 6,
    title: "RS485 Modbus RTU 통신 기반 자사 제품 검사 프로그램",
    desc: "자사 제품을 테스트하기 위한 Debugging 및 Logging 프로그램 개발",
    tags: ["Python", "RS485 Modbus", "PyQt5", "SQLite3", "MariaDB", "Log"],
    category: "Software",
    year: "2020~2025",
    emoji: "▷",
    github: null,
  },
];
