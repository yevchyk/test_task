import {CSSProperties, memo} from 'react'
import { LogoSC, SiteLogoCircleSC, SiteLogoSC } from 'components/ui/SiteLogo/styled'
import {Row} from "components/ui/Grid";
import Text from 'components/ui/Text'

export interface SiteLogoProps {
  className?: string
  style?: CSSProperties
    languages: string[]
}

function SiteLogo({ className, style, languages }: SiteLogoProps) {
  return (
      <SiteLogoSC className={className} style={style}>
        <SiteLogoCircleSC/>
        <LogoSC />
          <Row className="languages">
              {
                  languages.map((item, key)=><Text type={'languages'} key={key}>{item}</Text>)
              }
          </Row>
      </SiteLogoSC>
  )
}

export default memo(SiteLogo)
