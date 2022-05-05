import { formatDistance } from 'date-fns';

export const formatDistanceDate = (dateString: string): string => {
    return formatDistance(new Date(dateString), new Date(), {
        addSuffix: true,
        includeSeconds: true,
    });
};
