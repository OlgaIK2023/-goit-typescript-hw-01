export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  
//   // Замініть наступний код на версію за допомогою Record
//   const RoleDescription = {
//     admin: 'Admin User',
//     editor: 'Editor User',
//     guest: 'Guest User',
//   };


type RoleDescription = Record<UserRole, string>;

const RoleDescription: RoleDescription = {
  [UserRole.admin]: '${UserRole.admin} User', // "admin User"UserRole.admin,
  [UserRole.editor]: '${UserRole.editor} User', // "editor User"UserRole.editor,
  [UserRole.guest]: '${UserRole.guest} User', // "guest User"UserRole.guest,
};