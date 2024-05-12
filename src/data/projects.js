import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getProjects(query) {
  await fakeNetwork(`getProjects:${query}`);
  let projects = await localforage.getItem("projects");
  if (!projects) projects = [];
  if (query) {
    projects = matchSorter(projects, query, { keys: ["projectName", "projectInvestment"] });
  }
  return projects.sort(sortBy("createdAt"));
}

export async function createProject(projectData) {
  await fakeNetwork();
  let projects = await getProjects();
  let projectId = projects.length;
  let projectRating = Math.floor(Math.random() * 100) + 1;
  let project = {...projectData, projectId: projectId, projectRating: projectRating, createdAt: Date.now()};
  projects.push(project);
  await set(projects);
  return project;
}

export async function getProject(id) {
  await fakeNetwork(`project:${id}`);
  let projects = await localforage.getItem("projects");
  let project = projects.find(project => project.projectId == id);
  return project ?? null;
}

function set(projects) {
  return localforage.setItem("projects", projects);
}

let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}
