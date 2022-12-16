type ClassNameGetter = [className: string, condition?: boolean];

export const classNames = (...classes: (string | ClassNameGetter | undefined | null | false)[]): string => {
    const final: string[] = [];
    for(const c of classes) {
        if(!c) continue;
        if(Array.isArray(c)) {
            if(c[1]) final.push(c[0]);
        } else final.push(c);
        
    }
    return final.join(" ");
}