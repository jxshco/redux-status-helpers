const success = (inp: string) : string => `${inp}__SUCCESS`;
const failure = (inp: string) : string => `${inp}__FAILURE`;
const cancelled = (inp: string) : string => `${inp}__CANCELLED`;

export { success, failure, cancelled };
