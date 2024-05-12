import { Link, NavLink, useLoaderData } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { SendHorizontal } from 'lucide-react';
import { getProject } from '@/data/projects'
import NavBar from '@/components/NavBar';

export async function loader({ params }) {
    const project = await getProject(params.projectId);
    return { project };
};


function ProjectPage() {
    const { project } = useLoaderData();

    return (
        <main>
            <div className="circle"></div>
            <NavBar />
            <section className="container py-20">
                <header className="space-y-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/projects">Projects</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    {project.projectName}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-4xl font-semibold text-emerald-500">{project.projectName}</h1>
                    <article className="pt-4 space-y-4">
                        <p className="inline-block mr-1.5" >Created by </p>
                        <Badge variant="outline">{project.creatorName}</Badge>
                        <p>{project.projectDescription}</p>
                        <pre className="font-sans">{project.projectDetails}</pre>
                        <p>Required Investment: ${project.projectInvestment}</p>
                        <p>Rating {project.projectRating}%</p>
                        <Button 
                            asChild
                            className="bg-emerald-500 hover:bg-sky-500"
                        >
                            <Link
                                target="_blank"
                                to={`mailto:${project.creatorEmail}?subject=Investment on ${project.projectName} project`}
                            >
                                <SendHorizontal className="mr-2 h-4 w-4" />
                                Contact Creator 
                            </Link>
                        </Button>
                    </article>
                </header>
            </section>
        </main>
    );
}

export default ProjectPage;