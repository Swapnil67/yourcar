import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar/navbar";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    text-3xl font-bold
    overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
     <Navbar />
    </PageContainer>
  )
}