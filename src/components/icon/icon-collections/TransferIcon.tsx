interface TransferIconProps {
    color?: string;
    size?: number;
}

const TransferIcon = ({color = "#B1B1B1", size = 25}: TransferIconProps) => {
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.20825 22.9166C5.20891 23.469 5.42861 23.9985 5.81917 24.3891C6.20973 24.7796 6.73925 24.9993 7.29159 25H17.7083C18.2606 24.9993 18.7901 24.7796 19.1807 24.3891C19.5712 23.9985 19.7909 23.469 19.7916 22.9166V22.0052H5.20825V22.9166Z" fill={color}/>
            <path d="M19.7916 2.08333C19.7909 1.531 19.5712 1.00148 19.1807 0.610917C18.7901 0.220358 18.2606 0.00065473 17.7083 0L7.29159 0C6.73925 0.00065473 6.20973 0.220358 5.81917 0.610917C5.42861 1.00148 5.20891 1.531 5.20825 2.08333V3.125H19.7916V2.08333Z" fill={color}/>
            <path d="M24.7097 6.70052L21.5847 3.44531L20.0819 4.88802L21.3893 6.25H19.7916V8.33333H21.5017L20.1126 9.66459L21.554 11.1688L24.679 8.17396C24.7778 8.07926 24.857 7.96602 24.912 7.8407C24.9671 7.71538 24.9968 7.58045 24.9997 7.44361C25.0026 7.30677 24.9784 7.17071 24.9287 7.04321C24.8789 6.91571 24.8045 6.79926 24.7097 6.70052Z" fill={color}/>
            <path d="M16.6666 6.25002H19.7916V4.16669H5.20825V16.6667H8.33325V18.75H5.20825V20.8334H19.7916V8.33335H16.6666V6.25002ZM15.6249 10.4167H11.9791C11.841 10.4167 11.7085 10.4716 11.6108 10.5692C11.5131 10.6669 11.4583 10.7994 11.4583 10.9375C11.4583 11.0757 11.5131 11.2081 11.6108 11.3058C11.7085 11.4035 11.841 11.4584 11.9791 11.4584H13.0208C13.6666 11.4577 14.2896 11.697 14.7688 12.1299C15.2481 12.5628 15.5494 13.1583 15.6144 13.8008C15.6793 14.4433 15.5031 15.0871 15.1201 15.607C14.737 16.127 14.1745 16.4861 13.5416 16.6146V17.7084H11.4583V16.6667H9.37492V14.5834H13.0208C13.1589 14.5834 13.2914 14.5285 13.389 14.4308C13.4867 14.3331 13.5416 14.2007 13.5416 14.0625C13.5416 13.9244 13.4867 13.7919 13.389 13.6942C13.2914 13.5966 13.1589 13.5417 13.0208 13.5417H11.9791C11.3333 13.5423 10.7103 13.303 10.231 12.8701C9.75173 12.4373 9.45039 11.8418 9.38549 11.1992C9.32058 10.5567 9.49674 9.91297 9.87977 9.393C10.2628 8.87304 10.8254 8.51395 11.4583 8.38544V7.29169H13.5416V8.33335H15.6249V10.4167Z" fill={color}/>
            <path d="M3.49828 16.6667L4.88734 15.3354L3.44593 13.8312L0.320931 16.826C0.222115 16.9207 0.142929 17.034 0.0879011 17.1593C0.0328728 17.2846 0.00308028 17.4195 0.000226477 17.5564C-0.00262733 17.6932 0.0215135 17.8293 0.0712692 17.9568C0.121025 18.0843 0.19542 18.2007 0.290202 18.2995L3.4152 21.5547L4.91807 20.112L3.61064 18.75H5.2083V16.6667H3.49828Z" fill={color}/>
        </svg>
    );
}

export default TransferIcon;