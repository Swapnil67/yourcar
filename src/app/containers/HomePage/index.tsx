import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

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
      <h1>Home Page</h1>
    </PageContainer>
  )
}