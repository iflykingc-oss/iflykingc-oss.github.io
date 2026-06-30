// Bilingual strings — focused on the person + products, NOT the website itself
const i18n = {
  zh: {
    nav: { saas: 'AI SaaS', apps: 'AI Apps', tools: 'AI 工具' },
    hero: {
      badge: 'INDEPENDENT AI BUILDER',
      title: '用 AI 做产品，让想法落地。',
      subtitle: '我是 iflykingc，独立 AI 产品构建者。过去 6 个月里独立完成 9 款 AI 产品，覆盖求职、客服、销售、数据分析、创业雷达等多个真实场景。',
      cta1: 'GitHub',
      cta2: '联系合作'
    },
    stats: { projects: '个产品', products: '个商业 SaaS', demos: '个 Live Demo', languages: '种语言' },
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
      title: '关于我',
      paragraphs: [
        '我是 iflykingc，过去 6 个月独立完成了 9 个 AI 产品，每个都全栈：从架构、AI/RAG/Agent 工程、到前后端、再到上线运营。',
        '我的偏好：用最少代码做最对的事。AI 当杠杆，判断当护栏。三类项目都做过——3 个商业 SaaS（含可私有化部署）、4 个用户 App、2 个开发者工具。',
        '目前在新方向上探索：multi-agent harness、context engineering、面向海外市场的产品设计。'
      ]
    },
    thinking: {
      title: '做 AI 产品的一些想法',
      subtitle: '9 款产品下来反复打磨的几件事。引用公开研究 + 我的真实工作判断。',
      items: [
        {
          tag: 'METHOD',
          title: 'Vibe Coding',
          hook: '让 AI 写代码，判断还得自己来',
          body: 'Andrej Karpathy 2025 年提出的词，原意是"prototype-only coding with AI"。我把它拓展到生产代码，但保留一个核心习惯：每条 AI 提交我都会读 + 改再合并，从不让 AI 直接进 main。真实的边界来自 codebase：模块数过 30、互相有依赖时，AI 给的解法常常和已有抽象层不一致——这时"读 + 改"比"接受 + debug"便宜一个数量级。'
        },
        {
          tag: 'ARCHITECTURE',
          title: 'Harness 思维',
          hook: '90% 的 agent 失败是 harness 错，不是模型错',
          body: 'Anthropic 在 "Building Effective Agents" 里列了三种最常见的失败模式：context poisoning（错误信息污染 context）、distraction（context 过长，模型被无关信息带偏）、clash（context 内部矛盾）。我做了 agent 类产品（客服 / 销售陪练）后越确信：harness 工程师的工作是显式定义工具契约 + 严格守 token 预算 + 把失败路径做成可观测的。Claude Code / Cursor 本身就是这种 harness 工程已经工业化的证据。'
        },
        {
          tag: 'PRACTICE',
          title: 'RAG 真正主导的不是 embedding 模型',
          hook: '你 embed 得多准不重要，chunks 切得多细才重要',
          body: '两个公开研究：(1) Anthropic 2024 "Contextual Retrieval" — 给每个 chunk 加原文上下文做 prefix，retrieval 失败率显著下降；(2) Greg Kamradt chunking 实验——切法的重要性远超 embedding 模型选型。意思是：embedding 模型从 bge-small 换到大模型，可能 5% 提升；但你把切法改成语义级 + 加 query rewrite + 多路 rerank，整体质量直接跳一档。 **所以 RAG 系统好不好，主要看三件事：chunking、rerank、query rewrite，不看你选了哪个 embedding。**'
        },
        {
          tag: 'MINDSET',
          title: 'Context Engineering',
          hook: 'Context 是有限预算，不是自助餐',
          body: '2025 年 Tobi Lutke / Anthropic 反复讨论的词。一个常被忽略的工程事实：即使 Claude 现在的窗口到了 1M token，研究和实战都显示超过 50K-200K 后回答质量明显衰减（lost-in-the-middle 现象）。所以 context engineering 不只是"塞得越多越好"，是反向的操作：在 system prompt / 工具定义 / 历史 / 用户输入 / RAG 结果之间做最严取舍。**最有价值的不是塞什么进去，是决定什么不放进去。** Anthropic 的实践建议：把 prompt 拆模块（identity / instructions / examples / tools），按需 retrieve，不在 system prompt 里硬塞大量规则。'
        }
      ]
    },
    footer: {
      title: '聊聊看',
      desc: '如果你也在做 AI 产品，欢迎交流。',
      copy: '© 2026 iflykingc · Made with vibe + Claude Code'
    }
  },
  en: {
    nav: { saas: 'AI SaaS', apps: 'AI Apps', tools: 'AI Tools' },
    hero: {
      badge: 'INDEPENDENT AI BUILDER',
      title: 'Build AI products that ship.',
      subtitle: "I'm iflykingc — an independent AI product builder. In the past 6 months I've shipped 9 AI products across career platforms, customer service, sales coaching, analytics, and AI startup discovery.",
      cta1: 'GitHub',
      cta2: 'Get in touch'
    },
    stats: { projects: 'products', products: 'commercial SaaS', demos: 'live demos', languages: 'languages' },
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
      title: 'About',
      paragraphs: [
        "I'm iflykingc. In the past 6 months I've independently shipped 9 AI products — each one full-stack from architecture to AI engineering to frontend to launch and ops.",
        "My bias: minimum code that solves the problem, AI as leverage and engineer judgment as the guardrail. I've shipped 3 commercial SaaS (on-prem available), 4 consumer apps, and 2 developer tools.",
        'Currently exploring multi-agent harness, context engineering, and product design for overseas markets.'
      ]
    },
    thinking: {
      title: 'Some thoughts on AI products',
      subtitle: 'A few ideas I keep coming back to after 9 products. Public research + my own working judgment.',
      items: [
        {
          tag: 'METHOD',
          title: 'Vibe coding',
          hook: "Let AI write the code; judgment stays with you",
          body: 'Andrej Karpathy coined the term in 2025 — originally "prototype-only coding with AI". I extend it to production code, but keep one habit: every AI commit gets read + edited before merge. Never lets AI push to main directly. The real boundary shows up at codebase scale — once you cross ~30 modules with inter-dependencies, AI suggestions drift from your abstraction layers. At that point "read + edit" is an order of magnitude cheaper than "accept + debug later".'
        },
        {
          tag: 'ARCHITECTURE',
          title: 'Harness first',
          hook: '90% of agent failures are harness, not model',
          body: 'Anthropic\'s "Building Effective Agents" names three recurring failure modes: context poisoning (erroneous info corrupts the context), distraction (overlong context steers the model off-task), and clash (contradictions inside the context). After shipping agent products in customer service and sales coaching, I now believe the harness engineer\'s job is to: explicitly define tool contracts, hold a tight token budget, and make failure paths observable. Claude Code / Cursor are evidence that this harness engineering has already industrialized.'
        },
        {
          tag: 'PRACTICE',
          title: 'It\'s not your embedding model — it\'s your chunks',
          hook: 'chunking + rerank + query rewrite matter 10x more than model choice',
          body: 'Two public studies: (1) Anthropic\'s 2024 "Contextual Retrieval" — adding an LLM-generated context prefix to each chunk significantly cuts retrieval failure rate; (2) Greg Kamradt\'s chunking experiments — chunking strategy dominates embedding model choice. Net effect: swapping bge-small for a bigger embedding gives you maybe 5%; restructuring chunking + adding query rewrite + multi-source rerank jumps overall quality a whole tier. **So RAG quality is mostly chunking + rerank + query rewrite, not which embedding you picked.**'
        },
        {
          tag: 'MINDSET',
          title: 'Context engineering',
          hook: 'Context is a finite budget, not a buffet',
          body: 'A term Tobi Lutke / Anthropic pushed into the mainstream in 2025. One underappreciated engineering fact: even with Claude\'s 1M-token window, research and field reports agree that past ~50K-200K tokens answer quality noticeably decays (lost-in-the-middle phenomenon). Context engineering is the opposite of "feed everything" — it is rigorous trade-offs between system prompt / tool defs / history / user input / RAG results. **The highest-leverage move is not what to put in, it is what to leave out and retrieve on demand.** Anthropic\'s published practice: modular prompts (identity / instructions / examples / tools), retrieve instead of stuffing rules in system prompt.'
        }
      ]
    },
    footer: {
      title: "Let's talk",
      desc: 'If you are working on AI products, reach out.',
      copy: '© 2026 iflykingc · Made with vibe + Claude Code'
    }
  }
};

// Project data — unchanged
const projects = [
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
