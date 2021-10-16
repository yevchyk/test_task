import {CSSProperties, memo} from 'react'
import {LogoSC} from 'components/ui/Logo/styled'
import {ReactComponent as LogoSVG} from './svg/logo.svg'
import {ReactComponent as EmptyLogoSVG} from './svg/empty_logo.svg'
import Link from "components/ui/Link";

export interface LogoCircleProps {
    className?: string
    style?: CSSProperties
    to: string
}

function Logo({className, style, to}: LogoCircleProps) {
    return (
        <LogoSC className={className} style={style}>
            <Link to={to}>
                <div className={'logo'}>
                    <LogoSVG/>
                </div>
                <div className={'emptyLogo'}>
                    <EmptyLogoSVG/>
                </div>
            </Link>
        </LogoSC>
    )
}

export default memo(Logo)
