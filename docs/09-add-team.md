---
sidebar_position: 9
---

# Add your team

## Add your team to your Organization or Project
Before a user can access your organization or project, they must sign up and verify their email address. Then you can add them to your organization or project by:

1. Navigating to the organization workspace or project dashboard that you want to add members to. 
    - If you are in the Organization workspace, scroll to the Organization Administrators section. 
    ![](./getting-started-images/teams/add-org-members.png) 
    - If you are in the Project dashboard, click *Users* tab
    ![](./getting-started-images/teams/users1.png)
2. Enter the user's email address and assign them a role. See below for more details on roles and permissions.
3. The role selected will apply only to the entity that you're adding them to. For example, if you are on a specific project dashboard, the user added will be given access only to that project.
 

## Organization Roles

Organization roles are listed and described below:
    - Organization admin: Has full editing and viewing permissions. Can invite or revoke permision of any organization or project user. Has inherited an Admin role in all projects in the organization.
    - Organization editor: Has full editing and viewing permissions. Can invite Organization Viewers. Has inherited Organization Viewer role.
    - Organization viewer: Can view all data and details in the organization but cannot edit anything. Has and inherited Viewer role in all projects within the organization

Below is a table illustrating the  specific permissions of each role (if access is allowed it will be marked with an "X")
|                                 | Admin | Editor | Viewer |
|---------------------------------|:-----:|:------:|:------:|
| Add Admins                      |   X   |        |        |
| Add Editors, Viewers            |   X   |    X   |        |
| Change user role                |   X   |        |        |
| Revoke user                     |   X   |        |        |
| Edit organization               |   X   |    X   |        |
| Create cameras                  |   X   |    X   |        |
| View cameras                    |   X   |    X   |    X   |
| Create locations                |   X   |    X   |        |
| Edit locations                  |   X   |    X   |        |
| View locations                  |   X   |    X   |    X   |
| Create project                  |   X   |    X   |        |
| Edit projects                   |   X   |        |        |
| View all projects               |   X   |    X   |    X   |
| Download data from all projects |   X   |    X   |        |



## Project Roles

A brief description of each role is described below:
    - Project admin: Has full editing and viewing permissions. Can invite and revoke permisions of any project user.
    - Project editor: Has full editing and viewing permisions within the project.
    - Project contributor: Can identify images, create camera checks and upload images.
    - Project tagger: Can edit identifications
    - Project viewer: Can view all data and details in the project but cannot edit anything.

Below is a table illustrating the specific permissions of each role (if access is allowed it will be marked with an "X")

|                                    | Admin | Editor | Contributor | Tagger | Viewer |
|------------------------------------|:-----:|:------:|:-----------:|:------:|:------:|
| Add Admins, Editors                |   X   |        |             |        |        |
| Add Viewers, Contributors, Taggers |   X   |    X   |             |        |        |
| Change user role                   |   X   |        |             |        |        |
| Revoke user                        |   X   |        |             |        |        |
| Create cameras                     |   X   |    X   |      X      |        |        |
| Edit cameras                       |   X   |    X   |      X      |        |        |
| View cameras                       |   X   |    X   |      X      |    X   |    X   |
| Create locations                   |   X   |    X   |      X      |        |        |
| Edit locations                     |   X   |    X   |      X      |        |        |
| View locations                     |   X   |    X   |      X      |    X   |    X   |
| Create project                     |   X   |    X   |      X      |        |        |
| Edit project                       |   X   |    X   |      X      |        |        |
| View project                       |   X   |    X   |      X      |    X   |    X   |
| Create subprojects                 |   X   |    X   |             |        |        |
| Edit subprojects                   |   X   |    X   |             |        |        |
| View subprojects                   |   X   |    X   |      X      |    X   |    X   |
| Create camera checks               |   X   |    X   |      X      |        |        |
| Edit camera checks                 |   X   |    X   |      X      |        |        |
| View camera checks                 |   X   |    X   |      X      |    X   |    X   |
| Upload images                      |   X   |    X   |      X      |        |        |
| Create identifications             |   X   |    X   |      X      |        |        |
| Edit identifications               |   X   |    X   |      X      |    X   |        |
| View identifications               |   X   |    X   |      X      |    X   |    X   |
| Edit timestamps on images          |   X   |    X   |      X      |        |        |
| Highlight images                   |   X   |    X   |      X      |    X   |        |
| Delete images                      |   X   |    X   |             |        |        |
| Download data                      |   X   |    X   |      X      |        |        |


## Inherited roles

Below is a chart displaying the inheritance between each of the organization and project roles:

![](./permission-images/inherited-roles.png)