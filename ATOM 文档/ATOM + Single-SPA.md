<a name="XH0FU"></a>
## 调用链
<a name="J7vQm"></a>
### 主应用 atomfe/wheeljack
wheeljack.init();

wheeljack.layout(layout)

wheeljack.start -> ihome/trasformer$$start ->  **os-single-spa$$startSpa(){{0}}** + render()<br />>> render<br />ReactDom.render(RootComponent, DOM)<br />RootComponent -> App  -> ReactRouter -> Route(/)-> Layout<br />>> Layout<br />getLayoutRoutes  -> getSubApplicationRoutes+ATOM-POLYMER$$components -> getSubApplicationRoute -> **Route + SubApplication{{子应用 url 匹配}}**<br />>> SubApplication<br />MicroApp+ATOM-POLYMER$$component<br />>> MicroApp<br />render -> getSubApplication -> render -> Application<br />>> render -> ReactElement(class="atom-react-app") -> **ref-node**<br />>> componentDidmount <br />this.app = createMicroApp -> createApplication -> createAppInstance -> new Application<br />>> Application {load, mount, update, unmount}<br />>> load<br />createAppLoader -> <br />appInstance = extractModule-> loadBundle[]  -> fetch -> eval<br />-> 子应用{bootstrap, mount, unmount, update}+reactLifecycles<br />remoteApp -> **{appInstance, bootstrap,mount,unmount,update}**<br />**  + 子应用{bootstrap, mount, unmount, update}+reactLifecycles{{3}}**<br />>> **mount{{2}}**<br />parcel = os-single-spa$$mountRootParcel(<br />{bootstrap,mount,unmount,update}, {domElement: **ref-node**}<br />) +remoteApp$${bootstrap,mount,unmount,update} -> mountPromise<br />>> update<br />parcel.update<br />>> unmount<br />parcel.unmount<br />load -> load(this.app) -> this.app.load()<br />**mount{{1}}** -> mount(this.app) -> this.app.mount()<br />>> componentWillUnmount<br />unmount-> unmount(this.app) -> this.app.unmount()<br />>> componentDidUpdate<br />update -> update(this.app) -> this.app.update

<a name="IXlvA"></a>
### 子应用 packages/react-portal/src/mount.tsx
entry -> <br />single-spa-react -> reactLifecycles -> {bootstrap, mount, unmount, update}+reactLifecycles

<a name="FBJgR"></a>
## 说明
<a name="Jsx2a"></a>
### ATOM 采用 Parcel 模式
[https://juejin.cn/post/6955342063235760164#5-6](https://juejin.cn/post/6955342063235760164#5-6)<br />我们对 **application** 和 **parcel** 模式，做一个简单的对比

| 标题 | application | parcel |
| --- | --- | --- |
| 路由控制 | 有 | 无 |
| UI 渲染 | 有 | 有 |
| 生命周期方法 | single-spa 管理 | 用户自己管理 |
| 应用场景 | 多个子应用聚合 | 跨框架使用组件 |

<a name="GGJCd"></a>
### 调用链串联

1. Route + SubApplication{{子应用 url 匹配}}
2. MicroApp --->  Application -> render 生成一个节点，通过 ref 记录下来
3. MicroApp --->  Application -> componentDidMount
   1. load -> loadBundle -> 子应用代码执行，返回 single-spa-react 生命周期 **{{3}}**
      - single-spa-react 返回的 reactLifecycles.mount 里的实现，应该是 ReactDom(ReactElment, DOM) [https://github.com/single-spa/single-spa-react/blob/main/src/single-spa-react.js](https://github.com/single-spa/single-spa-react/blob/main/src/single-spa-react.js)
   2. mount**{{1}} {{2}}** -> 将输入的声明周期 **{{3}}**，运行了一遍
      - ref: [https://juejin.cn/post/6857783003646623751](https://juejin.cn/post/6857783003646623751)]
