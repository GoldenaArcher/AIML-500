'use client';
import React from 'react';
import {MermaidDiagram} from "@lightenna/react-mermaid-diagram";

function MermaidWrapper({ children }: { children: string }) {
    return (
        <MermaidDiagram>
            {children}
        </MermaidDiagram>
    );
}

export default MermaidWrapper;