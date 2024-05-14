import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Keystone Species',
    Svg: require('@site/static/img/undraw_walking_outside_re_56xo.svg').default,
    description: (
      <>
        Jaguars are considered pivotal members of their ecosystems, through regulating prey populations 
        and most importantly maintaining the structure and function of their habitats. 
        
      </>
    ), 
  },
  {
    title: 'Tourism and Ecotourism',
    Svg: require('@site/static/img/undraw_environment_iaus.svg').default,
    description: (
      <>
        Jaguars are charismatic megafauna, which means they attract tourism. 
        The presence of jaguars in an area can boost local economies through wildlife tourism and ecotourism, 
        providing incentives for conservation efforts.
      </>
    ),
  },
  {
    title: 'Cultural Significance',
    Svg: require('@site/static/img/undraw_environmental_study_re_q4q8.svg').default,
    description: (
      <>
        Jaguars hold cultural significance for many indigenous peoples, 
        often appearing in folklore, mythology, and spiritual beliefs. 
        Protecting jaguars helps preserve cultural heritage and traditional knowledge.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}