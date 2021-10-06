import mailIconSrc from '/@/assets/icon/mail.svg'
import twitterIconSrc from '/@/assets/icon/twitter.svg'
import { TrapLogo, KoudaisaiLogo } from '/@/assets/logo'

import Content from './Content'

const Footer: FC = () => {
  return (
    <div className="<lg:flex <lg:justify-center w-full">
      <div className="flex <lg:flex-col gap-32 <lg:gap-12 justify-center py-12 <lg:mx-8">
        <Content
          logo={TrapLogo}
          name="東京工業大学デジタル創作同好会traP"
          contacts={[
            { iconSrc: twitterIconSrc, text: '@traPtitech' },
            { iconSrc: mailIconSrc, text: 'info@trap.jp' }
          ]}
        />
        <Content
          logo={KoudaisaiLogo}
          name="工大祭実行委員会"
          contacts={[{ iconSrc: twitterIconSrc, text: '@tokyotechfest' }]}
        />
      </div>
    </div>
  )
}

export default Footer
