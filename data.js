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
      subtitle: '9 款产品下来反复打磨的几件事。不是论文，是工作笔记。',
      items: [
        {
          tag: 'METHOD',
          title: 'Vibe Coding',
          hook: '让 AI 写代码，别让它替你判断',
          body: '做 BuddyJob 的 6 周里，每条 AI 提交我都先读、再删 70%。命名尤其重要——同一产品叫 "玄机子" 比叫 "AI Fortune Teller" 让用户停留时长高 40%（实测）。这种判断 AI 做不了。我的工作流是 write-revert 不是 plan-execute：抽象层次不对就删，不用第二次。'
        },
        {
          tag: 'ARCHITECTURE',
          title: 'Harness 是产品，不是 RAG 之外的附加项',
          hook: 'Agent = Model + Harness',
          body: 'AIkefu 看起来是个聊天机器人，实际是 5 个独立服务（operation / model config / feishu bot / webhook adapter / RAG worker）。代码量上 harness 占 80%。最近体会：上下文管理 > 提示工程。8-12 轮工具调用结果怎么 keep 关键信息、丢冗余、压失败分支——这是 harness 工程师的活，不是 prompt 工程师的活。'
        },
        {
          tag: 'PRACTICE',
          title: 'RAG 在 KB 和 Agent 里是两套系统',
          hook: '"检索 + 拼 prompt" 在多轮对话里几乎失效',
          body: '玄机子大师（LifeChart）要跟用户聊八字——先收集出生时间、对话状态，再查 KB。文档问答的 RAG（向量召回 + 拼接）对 multi-turn + stateful 对话几乎无效。我做 agent 的 RAG 三件套：query rewrite（按 state 重写查询）+ rerank（多路召回排序）+ filter（按 state 过滤无关片段）。少一件，整体质量肉眼可见地降。'
        },
        {
          tag: 'MINDSET',
          title: 'Context engineering 的核心是砍',
          hook: 'Context is a budget, not a buffet',
          body: 'SalesCoach 加载 5 个行业插件（教育 / 金融 / SaaS…）时，模型同时看到全部 4 章知识库 + 完整对话历史 + 全部插件说明。token 开销飙、回答开始跑偏。我的原则：每加一段 context，先问"砍掉它影响什么"。能砍就砍。最有价值的不是塞什么进去，是决定哪些按需 retrieve。'
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
      subtitle: 'A few ideas I keep coming back to after 9 products. Working notes, not papers.',
      items: [
        {
          tag: 'METHOD',
          title: 'Vibe coding',
          hook: "Let AI write the code; don't let it decide for you",
          body: "Six weeks of BuddyJob: every AI commit I read first, then delete ~70% of it. Naming matters far more than people think — same product called 'XuanJiZi' instead of 'AI Fortune Teller' got 40% higher dwell time (real measurement). AI can't make those calls. My flow is write-revert, not plan-execute — wrong abstraction layer? delete, don't iterate."
        },
        {
          tag: 'ARCHITECTURE',
          title: 'Harness is the product, not an addon to RAG',
          hook: 'Agent = Model + Harness',
          body: "AIkefu looks like a chatbot. It's actually 5 services (operation / model config / feishu bot / webhook adapter / RAG worker). Harness is 80% of the code. The harder lesson I've learned: context management beats prompt engineering. Across 8-12 tool-call rounds — what to keep, what to drop, how to compress failure paths — that's the harness engineer's job, not the prompt engineer's."
        },
        {
          tag: 'PRACTICE',
          title: 'RAG for KB and RAG for agents are two systems',
          hook: 'Vanilla RAG fails at multi-turn, stateful dialogue',
          body: "Master XuanJiZi (LifeChart) needs to first collect the user's birth time + conversation state, then query the KB. Document-QA RAG (embed → retrieve → concat) does not work for multi-turn, stateful dialogue. For agents I use a 3-piece set: query rewrite (rewriting the query by current state) + rerank (multi-source candidate ranking) + filter (state-aware drop). Skip any piece, quality drops visibly."
        },
        {
          tag: 'MINDSET',
          title: 'Context engineering · the core skill is cutting',
          hook: 'Context is a budget, not a buffet',
          body: "When SalesCoach loads 5 industry plugins, the model sees the entire 4-section KB + full conversation history + every plugin doc. Token cost balloons; answers drift. My rule: before adding context, ask 'what breaks if I cut this?' Cut whenever you can. The most valuable thing isn't what to put in — it's deciding what stays outside and gets retrieved on demand."
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
