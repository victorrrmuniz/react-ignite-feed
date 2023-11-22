
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1492891651366-a5c2839dc64b?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            <div className={styles.profile}>
                <strong>Víctor Muniz</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    );
}