import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NxModule } from "@nrwl/nx";
import { ProjectsModule } from "@my-company-frontend/projects";

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), ProjectsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
