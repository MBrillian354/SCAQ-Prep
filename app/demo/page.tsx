import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Page() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-slate-800">UI Components Demo</h1>
          <p className="text-slate-600">
            A showcase of all available UI components in this project
          </p>
        </div>

        {/* Button Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-slate-800">Button</h2>
            <p className="text-slate-600">
              Displays a button with various variants and sizes
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>Different button styles available</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-slate-600">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">🎨</Button>
                  <Button size="icon-sm">📝</Button>
                  <Button size="icon-lg">🚀</Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-slate-600">Button States</h3>
                <div className="flex flex-wrap gap-2">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Input & Label Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-slate-800">Input & Label</h2>
            <p className="text-slate-600">
              Form input elements with labels
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Input Examples</CardTitle>
              <CardDescription>Various input field configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" type="text" placeholder="Disabled" disabled />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">File Upload</Label>
                <Input id="file" type="file" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Card Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-slate-800">Card</h2>
            <p className="text-slate-600">
              Container component with header, content, and footer sections
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
                <CardDescription>A basic card with title and description</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  This is the content area of the card. You can put any content here.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card with Action</CardTitle>
                <CardDescription>Card with an action button in header</CardDescription>
                <CardAction>
                  <Button size="sm" variant="outline">Edit</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  The action button is positioned in the header area.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="border-b border-slate-200">
                <CardTitle>Card with Footer</CardTitle>
                <CardDescription>Includes a footer section</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Main content goes here. The footer is separated below.
                </p>
              </CardContent>
              <CardFooter className="border-t border-slate-200 justify-between">
                <Button variant="ghost">Cancel</Button>
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Complete Card</CardTitle>
                <CardDescription>All card features combined</CardDescription>
                <CardAction>
                  <Button size="icon-sm" variant="ghost">⋯</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="card-input">Name</Label>
                  <Input id="card-input" placeholder="Enter name" />
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-200">
                <Button className="w-full">Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Tabs Component */}
        <section className="space-y-4">
          <div>
            <h2 className="text-slate-800">Tabs</h2>
            <p className="text-slate-600">
              Organize content into separate views with tab navigation
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Tabs Example</CardTitle>
              <CardDescription>Switch between different tab panels</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Enter username" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" placeholder="Tell us about yourself" />
                  </div>
                  <Button>Update Account</Button>
                </TabsContent>
                <TabsContent value="password" className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current">Current Password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new">New Password</Label>
                    <Input id="new" type="password" />
                  </div>
                  <Button>Change Password</Button>
                </TabsContent>
                <TabsContent value="settings" className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="notifications">Email Notifications</Label>
                    <Input id="notifications" type="email" placeholder="notifications@example.com" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Settings</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Combined Example */}
        <section className="space-y-4">
          <div>
            <h2 className="text-slate-800">Combined Example</h2>
            <p className="text-slate-600">
              A practical example using multiple components together
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>User Registration Form</CardTitle>
              <CardDescription>Complete form using all components</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal">
                <TabsList className="w-full">
                  <TabsTrigger value="personal" className="flex-1">Personal Info</TabsTrigger>
                  <TabsTrigger value="contact" className="flex-1">Contact</TabsTrigger>
                </TabsList>
                <TabsContent value="personal" className="mt-4 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">First Name</Label>
                      <Input id="firstname" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Last Name</Label>
                      <Input id="lastname" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" />
                  </div>
                </TabsContent>
                <TabsContent value="contact" className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">Email</Label>
                    <Input id="reg-email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="border-t border-slate-200 justify-between">
              <Button variant="outline">Reset</Button>
              <div className="flex gap-2">
                <Button variant="ghost">Cancel</Button>
                <Button>Register</Button>
              </div>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
}
