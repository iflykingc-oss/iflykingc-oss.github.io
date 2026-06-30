// Bilingual strings
const i18n = {
  zh: {
    nav: { saas: 'AI SaaS', apps: 'AI Apps', tools: 'AI 工具' },
    hero: {
      badge: 'AI PRODUCT BUILDER',
      title: '用 AI 做产品，让想法落地。',
      subtitle: '我是 iflykingc，独立 AI 产品构建者。过去半年里，我做了 9 个 AI 产品，覆盖求职、客服、销售、数据分析等多个领域。',
      cta1: '查看 GitHub',
      cta2: '联系合作'
    },
    stats: { projects: '个项目', saas: '个 AI SaaS 已上线', demos: '个 Live Demo' },
    sectionTitle: { saas: '🤖 AI SaaS · 企业服务', apps: '📱 AI Apps · 面向用户', tools: '🛠 AI 工具 · 开发者' },
    card: {
      demo: '🌐 Demo',
      code: '💻 Code',
      tech: '技术栈',
      features: '核心特性',
      statusActive: '活跃',
      statusStable: '稳定',
      statusSunset: '沉淀',
      private: '私有'
    },
    footer: {
      title: '一起做点有意思的',
      desc: '如果你也在做 AI 产品，欢迎交流合作。',
      copy: '© 2026 iflykingc · 用 AI 做产品'
    }
  },
  en: {
    nav: { saas: 'AI SaaS', apps: 'AI Apps', tools: 'AI Tools' },
    hero: {
      badge: 'AI PRODUCT BUILDER',
      title: 'Building AI products that ship.',
      subtitle: "I'm iflykingc — an independent AI product builder. Over the past months, I've shipped 9 AI products spanning career platforms, customer service, sales training, and analytics.",
      cta1: 'GitHub',
      cta2: 'Get in touch'
    },
    stats: { projects: 'projects', saas: 'AI SaaS live', demos: 'Live demos' },
    sectionTitle: { saas: '🤖 AI SaaS · Enterprise', apps: '📱 AI Apps · Consumer', tools: '🛠 AI Tools · Developer' },
    card: {
      demo: '🌐 Demo',
      code: '💻 Code',
      tech: 'Tech Stack',
      features: 'Features',
      statusActive: 'Active',
      statusStable: 'Stable',
      statusSunset: 'Archived',
      private: 'Private'
    },
    footer: {
      title: "Let's build something interesting",
      desc: 'If you are working on AI products, let us talk.',
      copy: '© 2026 iflykingc · Shipping AI products'
    }
  }
};

// Project data
const projects = [
  // AI SaaS
  {
    id: 'buddyjob-web',
    cover: 'assets/buddyjob-web.svg',
    category: 'saas',
    status: 'active',
    private: true,
    name: { zh: 'BuddyJob', en: 'BuddyJob' },
    tagline: {
      zh: '东南亚 AI 求职平台 · 简历分析 · 模拟面试',
      en: 'Commercial AI career platform for Southeast Asian job seekers'
    },
    tech: ['Next.js 16', 'TypeScript', 'Supabase', 'Tailwind', 'Stripe · PayPal'],
    features: {
      zh: ['AI 简历分析 · 评分 + 优化建议', 'AI 模拟面试 · 多轮对话反馈', 'Offer 评估 · 6 国语言（中/英/越/泰/印/马）'],
      en: ['AI resume scoring & optimization', 'Mock interview with multi-turn feedback', 'Offer analysis · 6 languages (zh/en/vi/id/th/ms)']
    },
    demo: 'https://buddyjob.asia',
    code: 'https://github.com/iflykingc-oss/buddyjob-web'
  },
  {
    id: 'AIkefu',
    cover: 'assets/AIkefu.svg',
    category: 'saas',
    status: 'active',
    private: true,
    name: { zh: 'AIkefu', en: 'AIkefu' },
    tagline: {
      zh: '企业级智能客服 · 知识库 RAG · 转人工 SLA',
      en: 'Enterprise AI customer service · RAG · Human handoff SLA'
    },
    tech: ['Python 3.10+', 'FastAPI', 'LangGraph', 'SQLite', 'Docker'],
    features: {
      zh: ['AI 质检 · RAG 知识库 · 转人工 SLA', 'SOP 流程编排 · CSAT 满意度', '多渠道接入：飞书 / 微信 / 钉钉 / WhatsApp / Telegram / LINE'],
      en: ['AI quality inspection · RAG · handoff SLA', 'SOP workflow · CSAT', 'Multi-channel: Feishu / WeChat / DingTalk / WhatsApp / Telegram / LINE']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/AIkefu'
  },
  {
    id: 'DataInsight',
    cover: 'assets/DataInsight.svg',
    category: 'saas',
    status: 'active',
    private: true,
    name: { zh: 'DataInsight', en: 'DataInsight' },
    tagline: {
      zh: 'AI 数据分析 · 自然语言 SQL · 智能洞察',
      en: 'AI-powered data analysis · NL2SQL · Smart insights'
    },
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind 4', 'Supabase'],
    features: {
      zh: ['自然语言 SQL · Excel/CSV 一键分析', '10+ 图表类型 · 6 行业模板', 'GA4 转化埋点 · 中英双语 · 暗色主题'],
      en: ['Natural language SQL · Excel/CSV upload', '10+ chart types · 6 industry templates', 'GA4 conversion tracking · EN/CN · dark mode']
    },
    demo: 'https://www.datainsight.live',
    code: 'https://github.com/iflykingc-oss/DataInsight'
  },
  {
    id: 'sales-ai-coach',
    cover: 'assets/sales-ai-coach.svg',
    category: 'saas',
    status: 'active',
    private: false,
    name: { zh: '销冠 AI 教练', en: 'Sales AI Coach' },
    tagline: {
      zh: 'AI 销售陪练 · 话术生成 · 自动复盘',
      en: 'AI sales coach · Pitch generation · Auto-review'
    },
    tech: ['React 19', 'Node.js', 'FastAPI', 'Prisma', 'PostgreSQL'],
    features: {
      zh: ['AI 话术生成：3 种风格（共情/直爽/专业）', '8 维度评分陪练 · 实时反馈', '知识库 · 成就系统 · 行业插件'],
      en: ['3-style pitch generator (empathy / direct / pro)', '8-dimension scoring practice', 'Knowledge base · achievements · industry plugins']
    },
    demo: 'https://sales-ai-coach.vercel.app',
    code: 'https://github.com/iflykingc-oss/sales-ai-coach'
  },

  // AI Apps
  {
    id: 'AI-Radar',
    cover: 'assets/AI-Radar.svg',
    category: 'app',
    status: 'active',
    private: false,
    name: { zh: 'AI 创业雷达', en: 'AI Radar' },
    tagline: {
      zh: '发现最新 AI 创业项目 · 4D 验证系统',
      en: 'Discover latest AI products · 4D verification'
    },
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'LangGraph'],
    features: {
      zh: ['15 数据源（Reddit/HN/Product Hunt/arXiv...）', '4D 验证 · 0-100 置信度', '多语言推送：Email / 飞书 / Slack / Discord / TG'],
      en: ['15 data sources (Reddit/HN/PH/arXiv…)', '4D verification · 0–100 confidence', 'Multichannel push: Email / Feishu / Slack / Discord / TG']
    },
    demo: 'https://ai-radar-delta-ochre.vercel.app',
    code: 'https://github.com/iflykingc-oss/AI-Radar'
  },
  {
    id: 'ShiftSmart',
    cover: 'assets/ShiftSmart.svg',
    category: 'app',
    status: 'stable',
    private: false,
    name: { zh: 'ShiftSmart', en: 'ShiftSmart' },
    tagline: {
      zh: '海外智能排班助手 · 零售 / 服务业',
      en: 'Smart shift scheduling for retail & service stores'
    },
    tech: ['TypeScript', 'PL/pgSQL', 'Mobile'],
    features: {
      zh: ['智能排班 · 自动冲突检测', '员工排班偏好匹配', 'Google Play 海外分发'],
      en: ['Smart scheduling · auto conflict detection', 'Staff preference matching', 'Google Play distribution']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/ShiftSmart'
  },
  {
    id: 'LifeChartApp',
    cover: 'assets/LifeChartApp.svg',
    category: 'app',
    status: 'stable',
    private: false,
    name: { zh: 'LifeChart 算命', en: 'LifeChart' },
    tagline: {
      zh: 'AI 智能算命 · 八字 · 紫微 · 塔罗',
      en: 'AI destiny reading · iOS & Android'
    },
    tech: ['JavaScript', 'Kotlin', 'Swift'],
    features: {
      zh: ['八字排盘 · 紫微斗数', '塔罗占卜 · 流年解读', 'iOS + Android 双端原生'],
      en: ['Four Pillars · Zi Wei Dou Shu', 'Tarot reading · annual forecast', 'Native iOS + Android']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/LifeChartApp'
  },

  // AI Tools
  {
    id: 'newPackCV-OCR',
    cover: 'assets/newPackCV-OCR.svg',
    category: 'tool',
    status: 'active',
    private: false,
    name: { zh: 'VibeCoding OCR', en: 'VibeCoding OCR' },
    tagline: {
      zh: '智能文档/图片信息提取引擎 · 8 行业场景',
      en: 'Document & image info extraction engine · 8 industries'
    },
    tech: ['Python 3.12', 'MinerU', 'VLM', 'Apache 2.0'],
    features: {
      zh: ['8 行业模板：包装 / 金融 / 医药 / 合同 / 证件', '全格式输入：图片 / PDF / DOCX / PPTX / XLSX', 'VLM-First 双通道融合 · 22 测试通过'],
      en: ['8 industry templates: packaging / finance / pharma / contract / ID', 'All-format: image / PDF / DOCX / PPTX / XLSX', 'VLM-First dual-channel · 22 tests passing']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/newPackCV-OCR'
  },
  {
    id: 'aisclab',
    cover: 'assets/aisclab.svg',
    category: 'tool',
    status: 'sunset',
    private: false,
    name: { zh: 'aisclab', en: 'aisclab' },
    tagline: {
      zh: 'AI 实验沙盒 · 早期原型仓库',
      en: 'AI sandbox · early-stage prototypes'
    },
    tech: ['Various'],
    features: {
      zh: ['早期 AI 原型实验', '想法验证 · 概念验证', '沉淀归档 · 不再维护'],
      en: ['Early AI prototype experiments', 'Idea & proof-of-concept', 'Archived · no longer maintained']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/aisclab'
  }
];
