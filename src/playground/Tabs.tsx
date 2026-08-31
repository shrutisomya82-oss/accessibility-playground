import {
  Tabs as ShadcnTabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../ui/tabs";

export default function Tabs() {
  return (
    <ShadcnTabs defaultValue="profile" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        This is my profile content.
      </TabsContent>

      <TabsContent value="projects">
        These are my projects.
      </TabsContent>

      <TabsContent value="contact">
        This is my contact information.
      </TabsContent>
    </ShadcnTabs>
  );
}