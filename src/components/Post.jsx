
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/60244111?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Víctor Muniz</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 8:13h" dateTime="2022-05-11 08:13:30">Publicado do a 1h</time>
            </header>

            <div className={styles.content}>
                <p></p>
                <p></p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário" 
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}