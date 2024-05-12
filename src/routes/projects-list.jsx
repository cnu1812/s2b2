import { Link, NavLink, useLoaderData } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { InfoCircledIcon } from "@radix-ui/react-icons"
import { getProjects } from '@/data/projects'
import NavBar from '@/components/NavBar'

export async function loader() {
    const projects = await getProjects();
    return { projects };
}

function ProjectsListPage() {
    const { projects } = useLoaderData();

    return (
        <main>
            <NavBar />
            <section className="container pt-8">
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
                                <BreadcrumbPage>
                                    Projects
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-4xl font-semibold">Projects</h1>
                </header>
                <div className="pt-8 grid grid-cols-3 gap-4">
                    {projects.map((project) => {
                        return (
                            <Card key={project.projectId}>
                                <CardHeader>
                                    <CardTitle className="text-emerald-500 text-lg">{project.projectName}</CardTitle>
                                    <CardDescription>{project.projectDescription}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Required Investment: ${project.projectInvestment}</p>
                                    <p>Rating {project.projectRating}%</p>
                                </CardContent>
                                <CardFooter>
                                    <Button 
                                        asChild
                                        variant="secondary"
                                        className="hover:bg-emerald-500 hover:text-slate-50"
                                    >
                                        <Link
                                            to={`/projects/${project.projectId}`}
                                        >
                                            <InfoCircledIcon className="mr-2 h-4 w-4" />
                                            See Details
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
                </section>
        </main>
    );
}

export default ProjectsListPage;