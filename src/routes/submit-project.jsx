import { Form, Link, NavLink, redirect  } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button, buttonVariants } from '@/components/ui/button'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { createProject } from '@/data/projects'
import NavBar from '@/components/NavBar'

export async function action({ request, params }) {
    const formData = await request.formData();
    const project = Object.fromEntries(formData);
    console.log(project);
    const newProject = await createProject(project);
    return redirect(`/projects/${newProject.projectId}`);
}

function SubmitProjectPage(){
    return (
        <main>
            <NavBar />
            <section className="mt-8 flex flex-col items-center justify-center gap-5">
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
                                    Submit Project
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <Card className="w-10/12 md:w-1/2">
                    <CardHeader>
                        <h1 className="text-xl text-emerald-500 font-semibold">Submit your project</h1>
                    </CardHeader>
                    <CardContent>
                        <SubmitProjectForm />
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}

function SubmitProjectForm() {
    return (
        <Form method="post" className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label
                        htmlFor="creator-name"
                    >
                        Creator Name
                    </Label>
                    <Input 
                        placeholder="First Last"
                        aria-label="Creator name"
                        type="text"
                        name="creatorName"
                        id="creator-name"
                        required
                    />
                </div>
                <div>
                    <Label
                        htmlFor="creator-email"
                    >
                        Email for contact
                    </Label>
                    <Input 
                        placeholder="creator@example.com"
                        aria-label="Creator email"
                        type="email"
                        name="creatorEmail"
                        id="creator-email"
                        required
                    />
                </div>
            </div>
            <Label
                htmlFor="project-name"
            >
                Project name
            </Label>
            <Input 
                placeholder="Project Name"
                aria-label="Project name"
                type="text"
                name="projectName"
                id="project-name"
                required
            />
            <Label
                htmlFor="project-description"
            >
                Project description
            </Label>
            <Input 
                placeholder="Project short description"
                aria-label="Project short description"
                type="text"
                name="projectDescription"
                id="project-description"
                required
            />
            <Label
                htmlFor="project-details"
            >
                Project details
            </Label>
            <Textarea 
                placeholder="Explain your project to investors"
                aria-label="Project details"
                type="text"
                name="projectDetails"
                id="project-details"
                required
            />
            <Label
                htmlFor="project-investment"
            >
                Project investment
            </Label>
            <Input 
                placeholder="Project required investment in $" 
                aria-label="Project required investment"
                type="number"
                name="projectInvestment"
                id="project-investment"
                required
            />
            <Button className="self-end bg-emerald-500" type="submit">Submit</Button>
        </Form>
    );
}

export default SubmitProjectPage;