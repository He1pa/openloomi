<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="apps/web/public/images/logo-text-dark.png">
  <img src="apps/web/public/images/logo-text.png" alt="OpenLoomi Logo" width="400">
</picture>

<br>

<p align="center">
<a href="./README.md">English</a> | <a href="./README-zh.md">简体中文</a>
</p>

**你的 AI 工作伙伴，记住所有工作细节。**

<br>

[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-4B4B4B?logo=linux&logoColor=white)](https://openloomi.ai)
[![License](https://img.shields.io/badge/License-Apache%202.0-F8D52A?logo=apache)](https://www.apache.org/licenses/LICENSE-2.0)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white)](https://discord.com/invite/xkJaJyWcsv)
[![X](https://img.shields.io/badge/X-Follow-000000?logo=x&logoColor=white)](https://x.com/AlloomiAI)

</div>

---

## 什么是 OpenLoomi？

OpenLoomi 是一个开源的 AI 工作空间，运行在你的桌面上。它连接你已经在使用的工具——消息应用、邮件、日历、文档、项目追踪器——并为你的人、项目和决策构建一个自我进化的记忆系统。

## 功能特性

|     | 功能模块                                                   | 功能说明                                                                                                                                                                                                                       |
| --- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 🧠  | **[自我进化记忆](https://openloomi.ai/docs/memory)**       | 短→中→长期记忆，配合渐进式遗忘引擎——按访问频率、时效性和重要性评分，自动摘要归档，可回溯数月前的上下文                                                                                                                         |
| 🔌  | **[平台连接器](https://openloomi.ai/docs/connectors)**     | Telegram、WhatsApp、微信、钉钉、飞书、Gmail、Google Calendar、Outlook、Google Docs、X/Twitter、Instagram、LinkedIn、Facebook Messenger、Jira、HubSpot、Asana、iMessage、QQ、RSS — 消息、邮件、日历事件、文档和项目更新持续流入 |
| ⏰  | **[自动化](https://openloomi.ai/docs/automation)**         | 支持 cron 表达式、间隔或一次性触发的定时任务 — 智能体驱动执行，配合超时恢复和执行历史                                                                                                                                          |
| 🖥️  | **[安全隐私](https://openloomi.ai/docs/privacy-security)** | Windows、macOS、Linux 原生桌面应用 — 本地优先存储（IndexedDB + SQLite），AES-256 加密，数据不离开你的设备                                                                                                                      |
| 🔗  | **[开源 Skills](https://openloomi.ai/docs/skills)**        | OpenLoomi Skills 完全开源，可集成到任何 AI Agent — Claude Code、Codex、OpenClaw、Hermes 等                                                                                                                                     |

<p align="center">
  <img src="screenshots/components.png" alt="架构图" width="100%">
</p>

## 快速开始

**直接下载**（面向终端用户）：

| macOS Apple Silicon                                                                                        | macOS Intel                                                                                              | Linux AMD64                                                                                              | Linux ARM64                                                                                                | Windows                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [.dmg](https://github.com/melandlabs/openloomi/releases/download/v0.5.0/openloomi_0.5.0_macOS_aarch64.dmg) | [.dmg](https://github.com/melandlabs/openloomi/releases/download/v0.5.0/openloomi_0.5.0_macOS_amd64.dmg) | [.deb](https://github.com/melandlabs/openloomi/releases/download/v0.5.0/openloomi_0.5.0_linux_amd64.deb) | [.deb](https://github.com/melandlabs/openloomi/releases/download/v0.5.0/openloomi_0.5.0_linux_aarch64.deb) | [.exe](https://github.com/melandlabs/openloomi/releases/download/v0.5.0/openloomi_0.5.0_windows_amd64.exe) |

完整文档请访问[这里](https://openloomi.ai/docs)。

**本地开发**（面向开发者）：

```bash
git clone https://github.com/melandlabs/openloomi.git
cd openloomi

cp apps/web/.env.example apps/web/.env

# 在 .env 中设置你的 AI 提供商密钥：
#   ANTHROPIC_API_KEY=sk-ant-...
#   LLM_API_KEY=sk-...

pnpm install
pnpm tauri:dev
```

需要 Node.js 22+、pnpm 9+ 和 Rust 1.75+。

## 应用截图

<table>
<tr>
<td><img src="screenshots/app/docx.gif" alt="文档预览" width="100%"></td>
<td><img src="screenshots/app/excel.gif" alt="表格预览" width="100%"></td>
</tr>
<tr>
<td><img src="screenshots/app/automation.gif" alt="自动化" width="100%"></td>
<td><img src="screenshots/app/connectors.gif" alt="连接器" width="100%"></td>
</tr>
</table>

## 安全隐私

- 本地优先：数据通过 IndexedDB + SQLite 存储在你的设备上
- AES-256 加密存储数据
- 绝不使用你的数据进行训练
- 硬件级隔离处理，无公开网关

## 反馈

这是早期阶段的软件。我们正在寻找愿意实际安装使用、连接工具并告诉我们问题所在的人。

- [GitHub Issues](https://github.com/melandlabs/openloomi/issues) — 报告 bug、安装问题、功能请求
- [Discord](https://discord.com/invite/xkJaJyWcsv) — 讨论、提问、帮助
- [Email](mailto:developer@alloomi.ai) — 其他事宜

## 贡献代码

参见 [CONTRIBUTING.md](./CONTRIBUTING.md)。可以关注 [`good first issue`](https://github.com/melandlabs/openloomi/labels/good%20first%20issue) 标签。

## 开源协议

[Apache 2.0](./LICENSE)
