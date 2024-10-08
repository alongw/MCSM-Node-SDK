export interface Image {
    id: string;
    ParentId: string;
    RepoTags: string[];
    RepoDigests: string[];
    Created: number;
    Size: number;
    VirtualSize: number;
    SharedSize: number;
    Labels: Record<string, string>;
    Containers: number;
}
export interface Container {
    Id: string;
    Names: string[];
    Image: string;
    ImageID: string;
    Command: string;
    Created: number;
    State: string;
    Status: string;
    Ports: {
        PrivatePort: number;
        PublicPort: number;
        Type: string;
    };
    Labels: Record<string, string>;
    SizeRw: number;
    SizeRootFs: number;
    HostConfig: {
        NetworkMode: string;
    };
    NetworkSettings: {
        Networks: {
            bridge: {
                NetworkID: string;
                EndpointID: string;
                Gateway: string;
                IPAddress: string;
                IPPrefixLen: number;
                IPv6Gateway: string;
                GlobalIPv6Address: string;
                GlobalIPv6PrefixLen: number;
                MacAddress: string;
            };
        };
    };
    Mounts: {
        Name: string;
        Source: string;
        Destination: string;
        Driver: string;
        Mode: string;
        RW: boolean;
        Propagation: string;
    }[];
}
export interface Network {
    Name: string;
    Id: string;
    Created: string;
    Scope: string;
    Driver: string;
    EnableIPv6: boolean;
    Internal: boolean;
    Attachable: boolean;
    Ingress: boolean;
    IPAM: {
        Driver: string;
        Config: {
            Subnet: string;
        }[];
    };
    Options: Record<string, string>;
}
