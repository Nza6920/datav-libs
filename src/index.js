import TestA from './components/Test-a/index'
import TestB from './components/Test-b/index'
import TestC from './components/Test-c/index'
import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import MyLoading from './components/Loading/index'
import MyFlyBox from './components/FlyBox/index'
import MyContainer from './components/Container/index'
import MyLogo from './components/Logo/index'
import CountTo from './components/VueCountTo/index'

export default function (Vue) {
    // 嵌套使用
    Vue.use(TestA)
    Vue.use(TestB)
    Vue.use(TestC)
    Vue.use(Icon)
    Vue.use(SvgAnimation)
    Vue.use(MyLoading)
    Vue.use(MyFlyBox)
    Vue.use(MyContainer)
    Vue.use(MyLogo)
    Vue.use(CountTo)
}
