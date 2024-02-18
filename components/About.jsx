import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { infoData } from "@/utils/constants";
import { qualificationData } from "@/utils/constants";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section
      className="mx-auto xl:max-h-[800px] min-h-[400px] pb-12"
      id="about-section"
    >
      <div className="container mx-auto flex justify-center py-3">
        <div>
          <img
            src="/dots-light.svg"
            alt=""
            className="h-[22px] w-[22px] items-center justify-center justify-self-start"
          />
        </div>
        <h2 className="text-2xl">About Me</h2>
      </div>
      <div className=" container flex-1 justify-center mx-auto">
        <Tabs defaultValue="personal">
          <div className="flex justify-center">
            <TabsList className="w-full xl:max-w-[520px] grid xl:grid-cols-2 justify-center">
              <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                className="w-[162px] xl:w-auto"
                value="qualifications"
              >
                Qualifications
              </TabsTrigger>
            </TabsList>
          </div>
          <div>
            <TabsContent value="personal">
              <div className="flex flex-col items-center xl:mt-5 text-center xl:text-left">
                <h3 className="h3 mb-4 max-w-xl">
                  Experience of designing Intuiative User Interface
                </h3>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                  I'm Gaurav Jagwani, a passionate UI developer with 1+ years of
                  experience in Front End and UI development. experiences. I'm
                  excited to contribute to creating captivating frontend
                  experiences.
                </p>
                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                  {infoData.map((item, index) => {
                    return (
                      <div
                        className="flex gap-x-4 items-center py-1 mx-auto xl:mx-0"
                        key={index}
                      >
                        <div className="text-primary">{item.icons}</div>
                        <div>{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-y-2 items-center">
                  <div className="text-primary">Language Skills</div>
                  <div className="border-b border-border"></div>
                  <div>English, Hindi, Sindhi</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="qualifications">
              <div className="flex flex-col items-center xl:mt-5 text-center xl:text-left">
                <h3 className="h3 mb-4 max-w-xl">My Journey</h3>
                <div className="flex xl:flex-row flex-col xl:gap-x-[200px] mt-4 gap-y-[50px]">
                  {/* Education Section */}
                  <div>
                    <div className="text-primary px-[15px] text-[22px] gap-x-2 flex">
                      <GraduationCap />
                      <div className="capitalize font-medium mb-3 text-center">
                        {getData(qualificationData, "education").title}
                      </div>
                    </div>
                    <div>
                      {getData(qualificationData, "education").data.map(
                        (item, index) => {
                          const { university, years, qualification } = item;
                          return (
                            <div key={index} className="flex gap-x-8 group">
                              <div>
                                <div className="font-semibold leading-none mb-2 text-xl">
                                  {university}
                                </div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {qualification}
                                </div>
                                <div className="text-base font-medium ">
                                  {years}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Experience Section */}
                  <div>
                    <div className="flex gap-x-2 text-[22px] px-[15px] text-primary">
                      <Briefcase className="flex items-center" />
                      <div className="capitalize font-medium mb-3">
                        {getData(qualificationData, "experience").title}
                      </div>
                    </div>
                    {/* Experience List */}
                    <div className="flex justify-center">
                      {getData(qualificationData, "experience").data.map(
                        (item, index) => {
                          const { company, years, role } = item;
                          return (
                            <div key={index} className="flex gap-x-8 ">
                              <div>
                                <div className="font-semibold leading-none mb-2 text-xl">
                                  {company}
                                </div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {role}
                                </div>
                                <div className="text-base font-medium ">
                                  {years}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
