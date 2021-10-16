import {CSSProperties, memo, ReactNode} from 'react'
import {LayoutMenuSC, LayoutMenuSCProps} from './styled'
import SiteLogo from 'components/ui/SiteLogo'
import Link from 'components/ui/Link'
import {Row} from "components/ui/Grid";

export interface LayoutMenuProps extends LayoutMenuSCProps {
    className?: string
    style?: CSSProperties
    logo: ReactNode
    menu: ReactNode
    logoHref?: string
}
const Languages = ['EN', 'UA', 'RU']

function LayoutMenu({className, style, logo, menu, logoHref}: LayoutMenuProps) {
    return (
        <LayoutMenuSC className={className} style={style}>
            <Row justify={'between'} align={"center"}>
                <div className='leftLogo'>
                    {logoHref ? (
                        <Link to={logoHref}>
                            <SiteLogo languages={Languages}/>
                        </Link>
                    ) : (
                        <SiteLogo languages={Languages}/>
                    )}
                </div>
                {logo}
                <div>
                    <div className={'rightMenu'}>{menu}</div>
                </div>
            </Row>
        </LayoutMenuSC>
    )
}

export default memo(LayoutMenu)
