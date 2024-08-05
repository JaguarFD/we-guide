import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const TitleComponent = () => {
  const { siteConfig } = useDocusaurusContext();
  return <>{siteConfig.title}</>;
};

export default TitleComponent;