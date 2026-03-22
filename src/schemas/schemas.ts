import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// About Schema
export type AboutDocument = About & Document;

@Schema()
export class About {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    role: string;
    
    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    email: string;
    
    @Prop({ required: true })
    phoneNumber: string;

    @Prop({ required: true })
    description: string;

    @Prop({ type: [String] })
    images: string[]
}

export const AboutSchema = SchemaFactory.createForClass(About);

// Education Schema
export type EducationDocument = Education & Document;

@Schema()
export class Education {
    @Prop({ required: true })
    school: string;
    @Prop({ required: true })
    year: string;
    @Prop({ required: true })
    course: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);

// Experience Schema
export type ExperienceDocument = Experience & Document;

@Schema()
export class Experience {
    @Prop({ required: true })
    role: string;
    @Prop({ required: true })
    year: string;
    @Prop({ required: true })
    description: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);

// Project Schema
export type ProjectDocument = Project & Document;

@Schema()
export class Project {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ type: [String] })
    tech: string;

    @Prop({ type: [String] })
    features: string;

    @Prop({ type: [String] })
    image: string;

    @Prop({ type: [String] })
    url: string;
    
    @Prop({ required: true })
    link: string;

    @Prop({ type: [String] })
    gallery: string[];
 
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

// Tech Skills Schema
export type TechSkillsDocument = TechSkills & Document;

@Schema()
export class Skill {
  @Prop({ required: true })
  name: string; 

  @Prop({ required: true })
  color: string; 
}

@Schema()
export class SkillCategory {
  @Prop({ required: true })
  category: string; 

  @Prop({ type: [String], default: [] })
  skills: string[]; 
}

@Schema()
export class TechSkills {
  @Prop({ type: [Skill], default: [] })
  skills: Skill[];

  @Prop({ type: [SkillCategory], default: [] })
  categories: SkillCategory[];

  @Prop({ type: [String], default: [] })
  topSkills: string[];
}

export const TechSkillsSchema = SchemaFactory.createForClass(TechSkills);

// Achievements Schema
export type AchievementsDocument = Achievements & Document;

@Schema()
export class Achievements {
    @Prop({ required: true })
    title: string;
    @Prop({ required: true })
    year: string;
    @Prop({ required: true })
    icon: string;
    @Prop({ required: true })
    image: string;
}

export const AchievementsSchema = SchemaFactory.createForClass(Achievements);

// Portfolio Schema for embeding all sections
export type PortfolioDocument = Portfolio & Document;

@Schema()
export class Portfolio {
    @Prop({ type: AboutSchema, required: true })
    about: About;

    @Prop({ type: [EducationSchema], default: [] })
    education: Education[];

    @Prop({ type: [ExperienceSchema], default: [] })
    experience: Experience[];

    @Prop({ type: [ProjectSchema], default: [] })
    projects: Project[];

    @Prop({ type: [TechSkillsSchema], default: [] })
    techSkills: TechSkills[];

    @Prop({ type: [AchievementsSchema], default: [] })
    achievements: Achievements[];

}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);