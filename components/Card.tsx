import React from 'react';

interface CardProps {
    name: string;
    img?: string;
    description?: string;
}

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"

const DCard: React.FC<CardProps> = ({ name, img, description }) => {
    return (
        <Card className="max-w-sm rounded overflow-hidden shadow-lg">
            {img && (
                <img className="w-full" src={img} alt={name} />
            )}
            <CardContent className="px-6 py-4">
                <CardHeader>
                    <CardTitle className="font-bold text-xl mb-2">{name}</CardTitle>
                </CardHeader>
                {description && (
                    <CardDescription className="text-gray-700 text-base">{description}</CardDescription>
                )}
            </CardContent>
            <CardFooter>
                {/* Footer content can go here if needed */}
            </CardFooter>
        </Card>
    );
}

export default DCard;
