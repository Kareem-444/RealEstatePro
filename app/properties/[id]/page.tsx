
import React from "react";

interface PropertyPageProps {
    params: {
    id: string;
    };
}

export default function PropertyPage({ params }: PropertyPageProps) {
    return (
    <div className="p-6">
        <h1 className="text-2xl font-bold">Property Details</h1>
        <p className="mt-2 text-gray-700">Property ID: {params.id}</p>
    </div>
    );
}