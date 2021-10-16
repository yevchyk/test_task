import {CSSProperties, memo, ReactNode} from 'react'
import {LayoutSC, LayoutSCProps} from './styled'
import LayoutMenu from 'components/LayoutMenu'
import {ReactComponent as BurgerSVG} from 'components/ui/svg/Burger.svg'
import Logo from "components/ui/Logo";

export interface LayoutProps extends LayoutSCProps {
    className?: string
    style?: CSSProperties
    children?: ReactNode
}

function Layout({className, style, children}: LayoutProps) {
    return (
        <LayoutSC className={className} style={style}>
            <LayoutMenu
                logoHref='/main'
                logo={
                        <Logo to={'/main'}/>
                }
                menu={
                    <BurgerSVG/>
                }
            />
            <div>
                {children}
            </div>
        </LayoutSC>
    )
}

export default memo(Layout)
