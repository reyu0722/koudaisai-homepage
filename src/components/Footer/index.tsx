import Content from './Content'
import { TrapLogo, KoudaisaiLogo } from '/@/assets/logo'
import twitterIconSrc from '/@/assets/icon/twitter.svg'
import mailIconSrc from '/@/assets/icon/mail.svg'

const Footer: FC = () => {
  return (
    <>
      <div className="flex justify-center gap-60 py-12 overflow-x-hidden">
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
    </>
  )
}

export default Footer
