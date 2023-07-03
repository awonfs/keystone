1. Create a component that shows recent mythic+ runs from the character that the user searched. #Done
   1.1 Switch button for showing / hiding uncompleted runs. ---> This has been added but is still bugged slightly.
2. Create a page where user can save their own characters and see their recent mythic+ runs.
   2.1 Install drizzle ORM and connect to a planetscale database.
   2.2 Create a schema for users that has the following properties:
   userId: string
   characters: array of characters
   2.3 Create a schema for characters that has the following properties:
   characterId: string @relation to user
   name: string
   realm: string
   region: string
   guild: string
3. Create about us page with a short description of the project and the team.
