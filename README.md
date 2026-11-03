# TradeFlow · 产品经理 / 技术产品作品集

以工厂询盘到报价为主线的个人产品案例，展示问题定义、产品取舍、交互迭代、AI 能力边界与试点验证方法。

这是独立的公开作品集仓库，仅包含静态展示页面、脱敏截图和案例文档，不包含 TradeFlow 完整业务源码、真实数据库、账号密码或云服务密钥。

## 阅读入口

- [在线作品集](https://royie-yeji.github.io/tradeflow-product-portfolio/)
- [完整案例 PDF](assets/tradeflow-product-case.pdf)
- [AI 助手 PRD](ai-prd.html)
- [产品定位与商业假设](positioning.html)
- [指标与试点验证方案](validation-plan.html)
- [实现与验收说明](implementation.html)
- [项目阶段与展示范围](scope.html)

## 案例关注点

1. 将产品资料、采购条件、销售跟进与报价版本组织成可操作流程。
2. 将长表单与长页面调整为先选对象、再处理任务的工作区。
3. 让 AI 围绕当前产品快照与采购条件准备回复，保留来源核对和人工确认。
4. 区分工程验收与业务验证，设计可核对的指标口径和小规模试点。

研发使用 AI 编码工具辅助。截图为合成测试场景，说明性回复示例不是实时推理结果。当前没有可披露的生产客户、收入或业务提效比例。完整系统的独立在线演示环境尚未部署。

## 页面技术与维护

作品集采用原生 HTML、CSS 和 JavaScript，无需数据库、后端、API Key 或依赖安装。所有站内资源使用相对路径，兼容 GitHub Pages 项目子目录。

本地预览：

```sh
python3 -m http.server 5402 --bind 127.0.0.1
```

浏览器访问 `http://127.0.0.1:5402/`。

发布设置：GitHub 仓库 → Settings → Pages → Deploy from a branch → `main` → `/(root)`。`.nojekyll` 用于直接发布静态文件。

后续更新只提交作品集目录内的文件。请保持页面、截图和下载文档中的项目阶段与事实一致。完整业务项目应继续单独保存与管理。
