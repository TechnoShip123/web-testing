// Square brackets make this route dynamic.
// If the user goes to projects/example or projects/abc and etc...
// it will render the component in this file.
import { useRouter } from "next/router";            // Import useRouter hook for dynamic routing.
import Head from 'next/head';                       // Import Head for metadata component
import styles from '../../styles/Home.module.css';  // Import the CSS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesome icons
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExclamationCircle, faRocket, faBookOpen } from '@fortawesome/free-solid-svg-icons';


export default function Project({ project }) {
    const router = useRouter();
    const { id } = router.query;

    return (<html lang="en">
        <div className={styles.container}>
            <Head>
                <title>{project.name}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description"
                    content={`Homepage for the ${project.name} project, created by @TechnoShip123 on GitHub.`} 
                />
                <script src="https://kit.fontawesome.com/597ef5bbc0.js" crossOrigin="anonymous"></script>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a className={styles.nowraplink} href={project.github_url}>{project.name}</a>.
                </h1>

                <p className={styles.description}>
                    Project ID <code className={styles.code}>{id}</code>
                </p>
            
            {/* GRID ------------------------------ */}
                <div className={styles.grid}>
                    {/* GitHub Repository */}
                    <a href={project.github_url} className={styles.card} hidden={project.hidden_github}>
                        <h2><FontAwesomeIcon icon={faGithub} /> GitHub Repo &rarr;</h2>
                        <p>Browse the project&apos;s code on GitHub.</p>
                    </a>

                    {/* Issues List */}
                    <a href={project.issue_url} className={styles.card} hidden={project.hidden_issues}>
                        <h2><FontAwesomeIcon icon={faExclamationCircle} /> Issues &rarr;</h2>
                        <p>View existing issues or submit a new one.</p>
                    </a>

                    {/* Deployments List */}
                    <a href={project.deployment_url} className={styles.card} hidden={project.hidden_deployments}>
                        <h2><FontAwesomeIcon icon={faRocket} /> Deployments &rarr;</h2>
                        <p>View a timeline of deployments, if applicable.</p>
                    </a>

                    {/* Wiki Page */}
                    <a href={project.wiki_url} className={styles.card} hidden={project.hidden_wiki}>
                        <h2><FontAwesomeIcon icon={faBookOpen} /> Wiki &rarr;</h2>
                        <p>View documentation and info on the wiki page.</p>
                    </a>
                </div>
            </main>

            {/* FOOTER ---------------------------- */}
            <footer className={styles.footer}>
                <a href="https://github.com/TechnoShip123" target="_blank" rel="noopener noreferrer">
                    Created by&nbsp;<b>TechnoShip123</b>
                </a>
            </footer>
        </div>
    </html>)
}

export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { project: data },
    }
}

// /** Next.js will use the props returned by this function 
//  * to pre-render the page at build time (Static Site Generation). 
//  * @see {@link https://nextjs.org/docs/basic-features/data-fetching/get-static-props}
//  */
// export async function getStaticProps({ params }) {
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();  // Convert to JSON

//     return {
//         props: { project: data }
//     }
// }

// /** Next.js will use the paths returned by this function 
//  * to statically pre-render the specified dynamic pages.
//  * @see {@link https://nextjs.org/docs/basic-features/data-fetching/get-static-paths}
//  */
// export async function getStaticPaths() {
//     const req = await fetch('http://localhost:3000/projects.json');
//     const data = await req.json();  // Get the projects we specified

//     // Map data to an array, containing every route for the dynamic path
//     const paths = data.map(project => {
//         return { params: {id: project} }
//     });

//     // Return the paths, along with extra options like fallback behavior.
//     return {
//         paths,
//         fallback: false
//     };
// }
