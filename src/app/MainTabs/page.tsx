"use client";
import React from "react";

import Container from "./Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Content from "./Content";

export default function MainTabs() {
  return (
    <Container>
      <Tabs defaultValue="contant_1" className="m-2 ">
        <TabsList>
          <TabsTrigger value="contant_1">contant_1</TabsTrigger>
          <TabsTrigger value="contant_2">contant_2</TabsTrigger>
          <TabsTrigger value="contant_3">contant_3</TabsTrigger>
        </TabsList>
        <TabsContent value="contant_1">
          <Content>111</Content>
        </TabsContent>
        <TabsContent value="contant_2">
          <Content>222</Content>
        </TabsContent>
        <TabsContent value="contant_3">
          <Content>333</Content>
        </TabsContent>
      </Tabs>
    </Container>
  );
}
