import Reveal from '../Reveal';
import styles from './TeamCard.module.css'

interface TeamCardProps {
    imageUrl: string,
    name: string,
    title: string,
    description: string
}

const TeamCard: React.FC<TeamCardProps> = ({ imageUrl, name, title, description }) => {
    return (
        <div className={styles.cardContainer}>
            <Reveal>
                <div className={styles.teamMemberImage}>
                    <img src={imageUrl} />
                </div>
            </Reveal>
            <div className={styles.teamMemberInfo}>
                <Reveal>
                    <div className={styles.teamMemberName}>
                        <span className={styles.accentText}>{name}</span>
                    </div>
                </Reveal>
                <Reveal>
                    <div className={styles.teamMemberTitle}>
                        {title}
                    </div>
                </Reveal>
                <Reveal>
                    <div className={styles.teamMemberDescription}>
                        {description}
                    </div>
                </Reveal>
            </div>
        </div>
    );
}

export default TeamCard