// Bilingual strings (no B2B/B2C labels — neutral)
const i18n = {
  zh: {
    nav: { saas: 'AI SaaS', apps: 'AI Apps', tools: 'AI 工具' },
    hero: {
      badge: 'INDEPENDENT AI BUILDER',
      title: '用 AI 做产品，让想法落地。',
      subtitle: '我是 iflykingc，独立 AI 产品构建者。9 款 AI 产品已上线，覆盖求职、客服、销售、数据分析、创业雷达等多个真实场景。',
      cta1: 'GitHub',
      cta2: '联系合作'
    },
    stats: { projects: '个项目', products: '款已上线产品', demos: '个 Live Demo', languages: '种语言' },
    sectionTitle: {
      saas: 'AI SaaS · 已商业化',
      apps: 'AI Apps · 用户产品',
      tools: 'AI 工具 · 开发者向'
    },
    card: {
      demo: '在线体验',
      code: '查看源码',
      private: '私有',
      tech: '技术栈',
      features: '核心特性',
      statusActive: '活跃维护',
      statusStable: '稳定运行',
      statusSunset: '已归档',
      updated: '更新于'
    },
    about: {
      title: '关于这个站点',
      subtitle: '它不仅是个产品展示页，它本身就是一个 Vibe Coding 的产物。整个站点从空白到上线用了一个下午。',
      stat1Num: '9', stat1Lab: '款已上线产品',
      stat2Num: '1220', stat2Lab: '行源代码',
      stat3Num: '6', stat3Lab: '个文件',
      stat4Num: '0', stat4Lab: '个外部依赖',
      stat5Num: '~30s', stat5Lab: '从 push 到上线',
      stat6Num: '3', stat6Lab: '次迭代',
      tool: '工具栈',
      log: [
        '$ claude-code',
        '→ 读取 9 个仓库的 README + 主题，建立项目档案',
        '→ 决定 3 大分类：Apps / SaaS / Tools',
        '$ write index.html + styles.css + data.js',
        '→ 用模板批量生成 9 张 SVG 项目封面（每张配色独立）',
        '$ git push origin main',
        '✓ GitHub Pages 构建成功 · 上线',
        '',
        '$ feedback from user: 有点丑，部分描述不准',
        '→ 重写 styles.css：magazine 式 editorial 风格',
        '→ 数据层修正：BuddyJob 从 SaaS 移到 Apps（它是 toC）',
        '→ 翻 4 张弱 SVG 封面（销冠/命运图谱/aisclab/buddyjob）',
        '$ git push redesign',
        '✓ Pages rebuilt',
        '',
        '$ this session: 设计 → about / decisions / next 3 个板块',
        '→ 把站点本身作为 Vibe Coding 案例展示',
        '→ 站点即作品；作品即简历'
      ]
    },
    decisions: {
      title: 'Engineering decisions',
      subtitle: '每个选择都对应一条被拒绝的替代方案。当下的判断、未来说不定会改。',
      items: [
        { choice: '静态 HTML', rejected: 'React / Next', reason: '单页内容无需路由；去掉构建链后失败模式更少、部署更快' },
        { choice: 'SVG 矢量封面', rejected: '真实截图', reason: '一半仓库私有取不到截图；矢量在任何 DPI 下都更清晰' },
        { choice: '暗色主题', rejected: '亮色 / 主题切换', reason: 'AI 圈默认审美；配色让项目色调更突出，省一行切换逻辑' },
        { choice: 'JS 切换双语', rejected: '多页静态生成', reason: '单源数据，零成本切换；代价是首屏 0.3s 未翻译内容' },
        { choice: 'GitHub Pages', rejected: 'Vercel / Netlify', reason: '已经在 GitHub 上、零配置、CDN 足够快；纯静态文件不需要 Serverless' }
      ]
    },
    next: {
      title: '再加 30 分钟会改什么',
      subtitle: '诚实清单。做完这些就过 90 分线了。',
      items: [
        '把 OG image 从渐变占位换成品牌设计（产品矩阵网格 + 标题）',
        '跑一遍 Lighthouse perf & a11y 审计（视觉判断 99+ 但没测过）',
        '加 prefers-reduced-motion 媒体查询，遵守用户系统设置',
        '每个项目加 "last updated" 日期显示（数据已有，渲染层缺）',
        '写一份 README 把 Vibe Coding 流程沉淀成可复用的方法论'
      ]
    },
    footer: {
      title: '一起做点有意思的',
      desc: '如果你也在做 AI 产品，欢迎交流合作。',
      source: '查看本站源码',
      copy: '© 2026 iflykingc · 用 AI 做产品'
    }
  },
  en: {
    nav: { saas: 'AI SaaS', apps: 'AI Apps', tools: 'AI Tools' },
    hero: {
      badge: 'INDEPENDENT AI BUILDER',
      title: 'Build AI products that ship.',
      subtitle: "I'm iflykingc — an independent AI product builder. 9 shipped AI products across career platforms, customer service, sales coaching, analytics, and more.",
      cta1: 'GitHub',
      cta2: 'Get in touch'
    },
    stats: { projects: 'projects', products: 'live products', demos: 'live demos', languages: 'languages' },
    sectionTitle: {
      saas: 'AI SaaS · Commercial',
      apps: 'AI Apps · Consumer',
      tools: 'AI Tools · Developer'
    },
    card: {
      demo: 'Live demo',
      code: 'Source code',
      private: 'Private',
      tech: 'Tech stack',
      features: 'Key features',
      statusActive: 'Active',
      statusStable: 'Stable',
      statusSunset: 'Archived',
      updated: 'Updated'
    },
    about: {
      title: 'About this site',
      subtitle: 'This page is itself a vibe-coding artifact — from empty repo to live, in one afternoon.',
      stat1Num: '9', stat1Lab: 'shipping products',
      stat2Num: '1,220', stat2Lab: 'lines of code',
      stat3Num: '6', stat3Lab: 'files total',
      stat4Num: '0', stat4Lab: 'dependencies',
      stat5Num: '~30s', stat5Lab: 'push to live',
      stat6Num: '3', stat6Lab: 'iterations',
      tool: 'Tooling',
      log: [
        '$ claude-code',
        '→ read 9 repo READMEs + topics, built a profile per project',
        '→ bucketed into 3 categories: Apps / SaaS / Tools',
        '$ write index.html + styles.css + data.js',
        '→ generated 9 SVG covers from a custom template',
        '$ git push origin main',
        '✓ GitHub Pages built · live',
        '',
        '$ user feedback: ugly, wrong categorization',
        '→ rewrite styles.css: editorial magazine style',
        '→ fix data: BuddyJob was toC not SaaS',
        '→ redraw 4 weak SVG covers (sales/LifeChart/aisclab/BuddyJob)',
        '$ git push redesign',
        '✓ Pages rebuilt',
        '',
        '$ this session: about + decisions + next sections',
        '→ the site itself is the resume piece',
        '→ resume artifact = site artifact'
      ]
    },
    decisions: {
      title: 'Engineering decisions',
      subtitle: 'Every choice here had a rejected alternative. Today\'s judgment may flip tomorrow.',
      items: [
        { choice: 'Static HTML', rejected: 'React / Next', reason: 'Single page, no routing needed; cutting the build chain means fewer failure modes and faster deploys.' },
        { choice: 'SVG vector covers', rejected: 'Real screenshots', reason: 'Half the repos are private — vectors stay sharp at any DPI and are explicitly designed.' },
        { choice: 'Dark theme', rejected: 'Light / theme toggle', reason: 'Default AI aesthetic, easier on long reads, lets per-project accent colors do the talking.' },
        { choice: 'JS-driven i18n', rejected: 'Multi-page static gen', reason: 'Single source of truth, zero-cost switching. Cost: 0.3s untranslated first paint.' },
        { choice: 'GitHub Pages', rejected: 'Vercel / Netlify', reason: 'Already on GitHub, zero-config, fast CDN. Static files do not need Serverless.' }
      ]
    },
    next: {
      title: 'What I would change with another 30 minutes',
      subtitle: 'Honest list. Knock these out and it crosses the 90-mark.',
      items: [
        'Replace OG placeholder with a real branded image (product matrix + headline)',
        'Run a Lighthouse perf & a11y audit — visually feels like 99+ but unverified',
        'Add a prefers-reduced-motion media query to respect user settings',
        'Show "last updated" date on every card (data has it, render layer doesn\'t)',
        'Write a README that turns this workflow into a reusable vibe-coding play'
      ]
    },
    footer: {
      title: "Let's build something interesting",
      desc: 'If you are working on AI products, let us talk.',
      source: 'View source on GitHub',
      copy: '© 2026 iflykingc · Shipping AI products'
    }
  }
};

// Project data — corrected categories + real content
// status: active | stable | sunset
// private: true = link badge only, no demo expected
const projects = [
  // ===== AI Apps (Consumer) =====
  {
    id: 'buddyjob-web',
    cover: 'assets/buddyjob-web.svg',
    category: 'app',
    status: 'active',
    private: true,
    accent: '#60a5fa',
    name: { zh: 'BuddyJob 求职搭子', en: 'BuddyJob' },
    tagline: {
      zh: '面向东南亚求职者的 AI 求职助理 — 简历分析、模拟面试、Offer 评估',
      en: 'AI career assistant for Southeast Asian job seekers — resume, interview, offers'
    },
    tech: ['Next.js 16', 'TypeScript', 'Supabase', 'Tailwind 3', 'Stripe · PayPal'],
    features: {
      zh: ['AI 简历分析 + 评分 + 优化建议', '多轮 AI 模拟面试 + 实时反馈', 'Offer 对比 + AI 求职知识库', '6 国语言（zh/en/vi/id/th/ms）+ 会员订阅'],
      en: ['AI resume scoring & optimization', 'Multi-turn AI mock interview & feedback', 'Offer comparison + AI career knowledge base', '6 languages (zh/en/vi/id/th/ms) + paid plans']
    },
    demo: 'https://buddyjob.asia',
    code: 'https://github.com/iflykingc-oss/buddyjob-web'
  },
  {
    id: 'AI-Radar',
    cover: 'assets/AI-Radar.svg',
    category: 'app',
    status: 'active',
    private: false,
    accent: '#a3e635',
    name: { zh: 'AI 创业雷达', en: 'AI Radar' },
    tagline: {
      zh: '每天发现并验证最新的 AI 创业项目 — 4D 评分 + 多语言推送',
      en: 'Discover and validate the newest AI products — 4D scoring + multi-channel push'
    },
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'LangGraph (Python)'],
    features: {
      zh: ['15 数据源：Reddit / HN / Product Hunt / arXiv / Hugging Face …', '4D 验证系统 · 置信度 0–100 评分', '推送：Email / 飞书 / Slack / Discord / TG / 钉钉', '12 类别分类 + 趋势追踪 + 对比雷达'],
      en: ['15 sources: Reddit / HN / Product Hunt / arXiv / Hugging Face …', '4D verification system · confidence 0–100', 'Push: Email / Feishu / Slack / Discord / TG / DingTalk', '12 categories + trends + comparison radar']
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
    accent: '#fbbf24',
    name: { zh: 'ShiftSmart 智能排班', en: 'ShiftSmart' },
    tagline: {
      zh: '面向海外门店的智能排班 App — 零售 / 餐饮 / 服务业',
      en: 'AI shift scheduling for overseas retail & service stores'
    },
    tech: ['React Native (Expo)', 'TypeScript', 'Supabase', 'Tailwind (RN)'],
    features: {
      zh: ['业务量预测 → 自动生成下周排班', '拖拽式手动排班 + 班次冲突检测', '员工换班申请 & 审批工作流', '中英双语 + GDPR 合规 + Sentry 监控'],
      en: ['Demand-based auto scheduling', 'Drag-and-drop manual scheduling + conflict detection', 'Shift swap requests & approvals', 'ZH/EN bilingual + GDPR compliant + Sentry']
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
    accent: '#c084fc',
    name: { zh: '命运图谱 LifeChart', en: 'LifeChart · 命运图谱' },
    tagline: {
      zh: '"玄机子" AI 大师 — 八字 · 紫微 · 姓名 · 占卜 · 语音对话',
      en: '"Master XuanJiZi" — Bazi · Zi Wei · Name · Divination · voice chat'
    },
    tech: ['React Native (Expo 54)', 'Zustand', 'react-native-voice', 'expo-speech'],
    features: {
      zh: ['玄机子 AI 大师：阴阳五行 / 紫微斗数 / 姓名测算', '语音输入输出 · 今日运势 · 解梦 · 风水', '分析历史 + 知识库 · 7 大功能屏', 'iOS + Android 双端原生体验'],
      en: ['AI Master "XuanJiZi" — Yin-Yang / Zi Wei / Name analysis', 'Voice I/O · daily fortune · dream · feng shui', 'Analysis history + knowledge base · 7 screens', 'Native iOS + Android']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/LifeChartApp'
  },

  // ===== AI SaaS (Commercial) =====
  {
    id: 'AIkefu',
    cover: 'assets/AIkefu.svg',
    category: 'saas',
    status: 'active',
    private: true,
    accent: '#2dd4bf',
    name: { zh: 'AIkefu 智能客服', en: 'AIkefu' },
    tagline: {
      zh: '企业级智能客服 — 支持私有化本地部署，SaaS 也可',
      en: 'Enterprise AI customer service — on-prem or SaaS'
    },
    tech: ['Python 3.10+', 'FastAPI', 'LangGraph', 'SQLite / PG', 'Docker'],
    features: {
      zh: ['私有化本地部署 — Docker 一键启动，数据 100% 内网', 'RAG 知识库 + AI 质检 + SOP 流程编排', '转人工 SLA · 工单 · CSAT 满意度', '多渠道：飞书 / 微信 / 钉钉 / WhatsApp / Telegram / LINE'],
      en: ['On-prem deployment — Docker one-click, data stays in your network', 'RAG knowledge base + AI quality inspection + SOP workflow', 'Human handoff SLA · tickets · CSAT', 'Multi-channel: Feishu / WeChat / DingTalk / WhatsApp / Telegram / LINE']
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
    accent: '#f472b6',
    name: { zh: 'DataInsight 数据洞察', en: 'DataInsight' },
    tagline: {
      zh: 'AI 数据分析 SaaS — 上传 Excel / CSV，AI 自动生成图表与洞察报告',
      en: 'AI data analysis SaaS — upload Excel/CSV, get instant dashboards'
    },
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind 4', 'Supabase'],
    features: {
      zh: ['自然语言 SQL · AI 图表推荐 · 智能数据洞察', '10+ 图表类型 · 6 行业模板（销售/营销/财务/HR/电商）', 'GA4 转化埋点 · 暗色主题 · 中英双语', 'PPP 定价（按购买力平价）面向全球市场'],
      en: ['Natural language SQL · AI chart recommender · smart insights', '10+ chart types · 6 industry templates', 'GA4 tracking · dark mode · EN/CN', 'PPP pricing (purchasing-power parity) for global markets']
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
    accent: '#fb7185',
    name: { zh: '销冠 AI 教练', en: 'Sales AI Coach' },
    tagline: {
      zh: 'AI 销售陪练平台 — 让每个销售都成为销冠',
      en: 'AI sales coaching platform — turn every rep into a top performer'
    },
    tech: ['React 19', 'Node.js', 'FastAPI', 'Prisma', 'PostgreSQL'],
    features: {
      zh: ['AI 话术生成：3 种风格（直爽/共情/专业）', '智能陪练 + 8 维度评分 + 实时反馈', '自动复盘 + 知识库 + 团队协作', '成就系统 · 行业插件（教育/金融/SaaS …）'],
      en: ['3-style AI pitch generator (direct / empathy / pro)', 'AI practice + 8-dimension scoring + feedback', 'Auto review + knowledge base + team collab', 'Achievements + industry plugins (edu/finance/SaaS …)']
    },
    demo: 'https://sales-ai-coach.vercel.app',
    code: 'https://github.com/iflykingc-oss/sales-ai-coach'
  },

  // ===== AI Tools =====
  {
    id: 'newPackCV-OCR',
    cover: 'assets/newPackCV-OCR.svg',
    category: 'tool',
    status: 'active',
    private: false,
    accent: '#22d3ee',
    name: { zh: 'VibeCoding OCR', en: 'VibeCoding OCR' },
    tagline: {
      zh: '文档/图片结构化信息提取 — 8 行业场景 · 全格式 · Apache 2.0 开源',
      en: 'Document & image info extraction — 8 industries · all formats · Apache 2.0'
    },
    tech: ['Python 3.12', 'MinerU', 'VLM-First', 'Apache 2.0'],
    features: {
      zh: ['8 行业模板：包装 / 金融票据 / 银行流水 / 医药 / 合同 / 证件 / 物流 / 通用', '全格式输入：图片 / PDF / DOCX / PPTX / XLSX', 'VLM + OCR 双通道融合 · 22 测试通过 · 结构化 JSON 输出', '表格识别 + 条码 / 二维码 / 公章检测'],
      en: ['8 templates: packaging / finance / pharma / contract / ID / logistics / …', 'All formats: image / PDF / DOCX / PPTX / XLSX', 'VLM + OCR dual-channel fusion · 22 tests · JSON out', 'Tables + barcode / QR / stamp detection']
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
    accent: '#94a3b8',
    name: { zh: 'aisclab 实验沙盒', en: 'aisclab' },
    tagline: {
      zh: '空仓库 · 早期 AI 原型试验场（已归档，仅作历史占位）',
      en: 'Empty repo · early AI prototype sandbox (archived, placeholder only)'
    },
    tech: ['—'],
    features: {
      zh: ['当前状态：仓库内无代码', '曾经用于：想法验证 · 概念原型 · 临时脚本', '已迁移至各正式项目（VibeCoding OCR / AI Radar …）', '保留占位 · 不再维护'],
      en: ['Status: no code in repo', 'Originally used for: idea validation · POC · scratch scripts', 'Migrated to live projects (VibeCoding OCR / AI Radar …)', 'Kept as placeholder · no longer maintained']
    },
    demo: null,
    code: 'https://github.com/iflykingc-oss/aisclab'
  }
];
