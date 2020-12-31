import { NextFunction, Request, Response } from "express";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import EduResumeHelper from "@BE/helpers/engineer-membership/edu-resume-helper";
import { RequestEducationType } from "@Lib/types/frontend/education/request-education-type";
import { EducationGradeType } from "@Lib/types/frontend/education/education-grade-type";
import { EducationInformationType } from "@Lib/types/frontend/global/education-information-type";

/**
 * Education Resume controller
 */
export default class EduResumeController {
    /**
     * eduResume/request-edu-resume-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestEduResumeList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const result: ActionResultType = await EduResumeHelper.requestEduResumeList();

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * eduResume/request-edu-grade-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestEduGradeList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const result: ActionResultType = await EduResumeHelper.requestEduGradeList();

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * eduResume/request-field-of-study-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestFieldOfStudyList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const educationGrade: EducationGradeType = req.body as EducationGradeType;

        const result: ActionResultType = await EduResumeHelper.requestFieldOfStudyList(
            educationGrade
        );

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * eduResume/request-academic-orientation-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestAcademicOrientationList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const fieldOfStudy: RequestEducationType = req.body as RequestEducationType;

        const result: ActionResultType = await EduResumeHelper.requestAcademicOrientationList(
            fieldOfStudy
        );

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * eduResume/new-education-resume-register action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async newEducationResumeRegister(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const newUserData: EducationInformationType = req.body as EducationInformationType;

        const result: ActionResultType = await EduResumeHelper.newEducationResumeRegister(
            newUserData
        );

        res.status(200)
            .send(result)
            .end();
    }
}
