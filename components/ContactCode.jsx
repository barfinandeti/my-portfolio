import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'danielnandeti.me',
    href: 'https://danielnandeti.me',
  },
  {
    social: 'email',
    link: 'danielnandeti@gmail.com',
    href: 'mailto:danielnandeti@gmail.com',
  },
  {
    social: 'github',
    link: 'barfinandeti',
    href: 'https://github.com/barfinandeti',
  },
  {
    social: 'linkedin',
    link: 'daniel nandeti',
    href: 'https://www.linkedin.com/in/danielnandeti/',
  },
  {
    social: 'twitter',
    link: 'barfinandeti',
    href: 'https://www.twitter.com/danielnandeti',
  },
  {
    social: 'instagram',
    link: 'barfinandeti',
    href: 'https://www.instagram.com/danielnandeti',
  },
  {
    social: 'polywork',
    link: 'barfinandeti',
    href: 'https://www.polywork.com/barfinandeti',
  },
  {
    social: 'telegram',
    link: 'danielnandeti',
    href: 'https://t.me/danielnandeti',
  },
  {
    social: 'codepen',
    link: 'danielnandeti',
    href: 'https://codepen.io/danielnandeti',
  },
  {
    social: 'codesandbox',
    link: 'danielnandeti',
    href: 'https://codesandbox.io/u/danielnandeti',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
