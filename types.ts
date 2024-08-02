// RoleEnum.enum.ts
export enum RoleEnum {
    Admin = 'Admin',
    Doctor = 'Doctor',
    Nurse = 'Nurse',
    Pharmacist = 'Pharmacist',
    // Add more roles as needed
}

// gender.enum.ts
export enum GenderEnum {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}

// ApprovalStatus.enum.ts
export enum ApprovalStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    REJECTED = 'rejected'
}

// examination.enum.ts
export enum ExaminationType {
    XRay = 'XRay',
    MRI = 'MRI',
    CT = 'CT',
    Ultrasound = 'Ultrasound',
    Echo = 'Echo',
    BloodTest = 'BloodTest',
    Biological = 'Biological'
}

// InventoryType.enum.ts
export enum InventoryType {
    Injectable = "Injectable",
    Eatable = "Eatable"
}

// Interfaces

// User.interface.ts
export interface User {
    id: string;
    username: string;
    password: string;
    role: RoleEnum;
    image?: string;
    rooms: Room[];
    Patients_signed_to_leave: Patient;
    examinations: Examination[];
    treatmentsGivinTo: Treatment[];
    movedPatients: Patient[];
    patients: Patient[];
    sections: Section[];
    notifications: Notification[];
    inventoryItems: InventoryItem[];
    createdAt: string;
    updatedAt: string;
}

// TreatmentSchedule.interface.ts
export interface TreatmentSchedule {
    id: string;
    treatment: Treatment;
    timestamp: Date;
    status: string;
}

// Treatment.interface.ts
export interface Treatment {
    id: string;
    name: string;
    notes: string;
    schedules: TreatmentSchedule[];
    patient: Patient;
    treatmentsGivinBy: User;
    startDate: Date;
    timesPerDay: number;
    intervalHours: number;
}

// Section.interface.ts
export interface Section {
    id: string;
    name: string;
    assignedBy: User;
    rooms: Room[];
    createdAt: Date;
    updatedAt: Date;
}

// Room.interface.ts
export interface Room {
    id: string;
    name: string;
    bedsNum: number;
    assignedBy: User;
    beds: Bed[];
    section: Section;
    createdAt: string;
    updatedAt: string;
}
export interface CreatePatientDto {
    name: string;
    familyName: string;
    gender?: GenderEnum;
    sickGuard?: string;
    dateOfEntry: Date;
    dateOfBirth?: Date;
    description : string ; 
    SickGuardPhone? : string ;
}
// Patient.interface.ts
export interface Patient {
    id: string;
    name: string;
    familyName: string;
    sickGuard: string;
    dateOfBirth: Date;
    dateOfEntry: Date;
    dateOfExit?: Date;
    gender?: GenderEnum;
    WentOut?: boolean;
    LetGoBy: User;
    movedBy: User;
    examinations: Examination[];
    assignedBy: User;
    approvalStatus: ApprovalStatus;
    bed: Bed;
    createdAt: Date;
    treatments: Treatment[];
    updatedAt: Date;
}

// Notification.interface.ts
export interface Notification {
    id: string;
    message: string;
    sendTo: User[];
    isRead: boolean;
    createdAt: Date;
}

// Examination.interface.ts
export interface Examination {
    id: string;
    type: ExaminationType;
    details: any;
    assignedBy: User;
    patient: Patient;
    sendTo: User[];
    completed: boolean;
    completionDate?: Date;
    createdAt: Date;
    report: ExaminationReport;
    updatedAt: Date;
}

// ExaminationReport.interface.ts
export interface ExaminationReport {
    id: string;
    examination: Examination;
    // Add other necessary fields
}

// Bed.interface.ts
export interface Bed {
    id: string;
    room: Room;
    index: number;
    patient: Patient;
    createdAt: string;
    updatedAt: string;
}

// InventoryItem.interface.ts
export interface InventoryItem {
    id: string;
    name: string;
    type: InventoryType;
    quantity: number;
    createdBy: User;
    createdAt: string;
    updatedAt: string;
}
