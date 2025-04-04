import { useEffect, useState } from "react";
import { UseFormWatch } from "react-hook-form";

export const useSumField = (watch: UseFormWatch<any>, fields: string[]) => {
    const [sum, setSum] = useState(0);

    useEffect(() => {
        const subscription = watch((values) => {
            const total = fields.reduce((acc, field) => {
                const value = parseInt(values[field]) || 0;
                return acc + value;
            }, 0);
            setSum(total);
        })
    }, [watch, fields]);

    return sum;
}