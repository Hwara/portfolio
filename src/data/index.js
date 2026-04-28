export const PROFILE = {
  name: "박진영",
  nameEn: "Jinyeong Park",
  role: "Cloud / Infra Engineer",

  bio: "하드웨어 개발부터 클라우드 인프라까지, 시스템 전 계층을 직접 다뤄본 엔지니어",
  about: [
    {
      title: "하드웨어 회로부터 클라우드 인프라까지, 시스템 전 계층을 직접 다뤄본 엔지니어",
      body: "중학생 때부터 서버와 인프라에 관심이 있었지만, 가정 형편으로 전기/전자 전공 실업계 고등학교에 진학하였습니다. 졸업 후 산업용 모니터링 제품을 개발하는 회사에서 회로 설계, 펌웨어, 소프트웨어까지 제품 하나를 처음부터 끝까지 만드는 경험을 5년간 쌓았고, 본래 관심사였던 클라우드/인프라 분야로 전환하기로 결심했습니다."
    },
    {
      title: "다양한 트러블슈팅 경험",
      body: "하드웨어 개발에서 얻은 다양한 트러블슈팅 경험은 클라우드에서도 그대로 적용되었습니다. 노이즈 신호 문제를 수십 번의 시제품 디버깅을 통해 원인을 좁혀가던 방식이, AWS LB Controller를 통해 생성된 ELB의 Target Group이 지정되지 않는 에러 너머 근본적인 원인인 providerID 누락을 찾아내는 과정과 별반 다르지 않았습니다."

    },
    {
      title: "전환 후 1년, CKA 취득과 부트캠프 1위 수료",
      body: "새로운 기술이나 지식을 접할 때마다 이를 적극적으로 학습해 클라우드 부트캠프를 1위의 성적으로 수료하고 CKA를 취득했습니다. 현재는 Kubernetes, Terraform, AWS를 중심으로 인프라 자동화와 운영 효율화에 집중하고 있습니다."
    },
  ],
  contact: { email: "hwara1221@gmail.com", location: "부산, 대한민국" },
  stats: [
    { num: "5+", label: "Years Experience" },
    { num: "6", label: "Projects Done" },
    { num: "7", label: "자격 취득" },
  ],
  skills: [
    "Kubernetes", "Terraform", "AWS Cloud", "Python", "Git", "GitHub Actions",
    "ArgoCD", "Prometheus", "Grafana", "Loki",
  ],
  social: [
    { label: "GitHub", href: "https://github.com/Hwara" },
    { label: "Email", href: "mailto:hwara1221@gmail.com" },
  ],
};

export const EXPERIENCES = [
  {
    period: "2019 - 2025",
    company: "(주)솔루윈스",
    role: "기업부설연구소 주임연구원",
    desc: [
      "산업용 측정/제어 제품의 회로 설계, PCB Artwork, 펌웨어 개발 등 전반적인 프로젝트를 주도",
      "전력 모니터링 장치 등 5개 이상 제품의 개발 실무 담당",
      "현장 제품 설치 및 시스템 유지보수",
    ]
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
    tags: ["React", "Spring Boot", "Kubernetes", "Terraform", "AWS Cloud",
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
