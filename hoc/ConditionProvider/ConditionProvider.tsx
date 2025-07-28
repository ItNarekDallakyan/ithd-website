export const ConditionProvider = ({children, condition}: any) => {
    if (condition) {
        return children;
    }

    return null;
}