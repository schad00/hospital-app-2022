from rest_framework import  serializers
from medicaldata.models import *


class ConsentemenDataSerialize(serializers.ModelSerializer):
    class Meta:
        model=ConsentemenData
        fields=(  'id_patient',
                    'id_Consentement',
                    'If_insomnie',
                    'If_doulAbdomDos',
                    'If_culpabilite',
                    'if_SousEstimation',
                    'If_ArrestaionAgresseur',
                    'If_TristeAndDiscourage',
                    'If_shame',
                    'If_angryOrAgre',
                    'If_affraid',
                    'Other',
                    'PriseChargeMedi',
                    'PriseChargePsycho',
                    'PriseChargeJuri' )

class PsychoInfodataSerialize(serializers.ModelSerializer):
    class Meta:
        model=PsychoInfodata
        fields=(
                'id_psycho',
                'Province',
                'Territoire',
                'District', 
                'ZoneDesante',
                'DateInscription',
                'CodeNomLettres',
                'Ordre',
                'Inc', 
                'Anne',
                'codeZoneSante', 
                'CodeStructure', 
                'EmotionReaction', 
                'SameActiviBeforeIncident',
                'TypeAccomPsycho',
                'QualPrestateurCharge', 
                'If_VicGotSupport', 
                'WhatIf_VicHasSupport',
                'If_vicHadAppointSuivi', 
                'Ifnot_vicHadAppointSuiviWhy', 
                'If_survivePresentedVist', 
                'Ifnot_AbandonTreatement', 
                'RefAndContreRef', 
                'OtherInfo',
                'CodeResponsable',
                'FonctionRe',
                'Date',
                'Signature',
                'id_patient')
        
        
        
class TestExamenTraitementSerialize(serializers.ModelSerializer):
    class Meta:
        model='TestExamenTraitement',
        fields=(
                'Id_testExam', 
               'GrossesseEchantillon',
                'GrossesseResultat', 
                'VihEchantillon', 
                'VihResultat',
                'RprVdrlEchantillon', 
                'BePbEchantillon', 
                'RprVdrlResultat', 
                'ImagerieMedicalEchantillon', 
                'ImagerieMedicalResultat',
                'AutresEchantillon',
                'AutresResultat', 
                 'TypesPreuvesSites', 
                'LieuExamen',
                'LieuStockage', 
                'preleverParDate', 
                'If_PreventionVih', 
                'PreventionVihComment',
                'If_TraitementPreventIST', 
                'TraitementPreventISTComment', 
                'If_ContraceptionUrgence', 
                'ContraceptionUrgenceComment', 
                'If_TraitementBlessure', 
                'TraitementBlessureComment', 
                'If_ProfilaxyTetanos', 
                'ProfilaxyTetanosComment',
                'If_VaccinationHepatiteB',
                'VaccinationHepatiteBComment', 
                'If_reperationFistule',
                'reperationFistuleComment',
                'OtherTreatement', 
                'OtherTreatementComment', 
                'EtatPsychologiqueGen', 
                'If_VichasRightPlaceStay', 
                'If_VicHasPersonAccompany'
                'NomPartenaireRespo',
                'CouncilGiven', 
                'typerefernces',
                'VoletStructReference',
                'DateReference', 
                'Conclusion',
                'SuiviRecoRendezVous', 
                'NomStructure', 
                'ContactStructure', 
                'AdresssePhysiStructure',
                'ZoneDesante',
                'nomClinicienMED', 
                'fonctionClinieMed',
                'Date', 
                'Signature',
                'Id_patient',)   
        
        
class StatusVaccinalPageSerialize(serializers.ModelSerializer):
    class Meta:
        model='StatusVaccinalPage',
        fields=(
                'Id_statut',
                'TetanosVaccine', 
                'TetanosDateVaccination', 
                'TetanosStatusVaccinalInconnu', 
                'HepatiteBVaccine',
                'HepatiteBDateVaccination', 
                'HepatiteBStatusVaccinalInconnu', 
                'StatusVihVaccine', 
                'StatusVihDateVaccination',
                'StatusVihStatusVaccinalInconnu',
                'ApparenceVictime',
                'AspectPsychoVict', 
                'SignesVitaux', 
                'Poids', 
                'Taille',
                'Ta',
                'pouls', 
                'Temperature', 
                'FrequenceRespiratoire', 
                'FrequenceCardiaque', 
                'PlaisSaignent',
                'PlaisSaignentPartie', 
                'Cicatrice',
                'CicatriceSaignentPartie', 
                'EtatTete', 
                'EtatYeux', 
                'EtatOreilles',
                'EtatPoitrine', 
                'EtatDos', 
                'EtatMembreSuperieure', 
                'EtatNez',
                'EtatBouche', 
                'EtatCou', 
                'EtatAbdomen', 
                'EtatFesses', 
                'EtatMembreInferieure', 
                'VulvePerineScrotum', 
                'Hymen', 
                'Anus', 
                'VaginAndPenis',
                'PositionPatienEnExamenGenital', 
                'DecubitusDorsalGenitalP',
                'DecubitusVentralGenitalP', 
                'GenouPectoralGenitalP',
                'DecubitusLateralGenitalP', 
                'PositionPatienEnExamenAnalP', 
                'DecubitusDorsalAnalP',
                'DecubitusVentralAnalP',
                'GenouPectoralAnalP',
                'DecubitusLateralAnalP',
                'DescriptionEndroitPlaiesLesion'
                'Id_patient'),  
 
 
class ReferenceMedSerialize(serializers.ModelSerializer):
    class Meta:  
        model='ReferenceMed',
        fields=(
                'Id_MedRef',
                'Date',
                'GotAssMedical',
                'TypeAssystanceGot', 
                'ExamenTestGrossesse',
                'ExamenTestVih', 
                'ExamenTestIst', 
                'ExamenPhysique', 
                'ExamenLabo',
                'If_AssisanceWrittenDoc', 
                'RapportMedical', 
                'AttestationMedical', 
                'TrContracepUrgence',
                'TrPreventionVih',
                'TrIst', 
                'TrOtherPricise',
                'CertificaMedical', 
                'If_ExamenMedicauxAfterAgression',
                'ExamenMediAfterAgressionDescript',
                'ExamenMediAfterAgressionReasonsIfnon', 
                'If_GrossesseBeforeViol',
                'If_ConceptionSviol',
                'IF_EnfantOrFoetusalive', 
                'SequellOrLesionPhysique', 
                'NomStructure',
                'QualiteStrucutre', 
                'NomClinicien', 
                'FonctionClinicien', 
                'DateClini', 
                'SignatureClini',
                'Id_patient',) 
        
        
class MedExamAllPriseChargeSerialize(serializers.ModelSerializer):
    class Meta:
        
        model='MedExamAllPriseCharge',
        fields=(
                'Id_medExamAllPC', 
                'Date', 
                'GrossesseExamenSeventyTwoAfterViol',
                'GrossesseExamenOneMothAfterViol',
                'VihExamenSeventyTwoAfterViol',
                'VihssesseExamenOneMothAfterViol',
                'IstExamenSeventyTwoAfterViol', 
                'IstssesseExamenOneMothAfterViol',
                'If_VicWasSeronegaGotPepINSeventyTwo',
                'CommentVicWasSeronegaGotPepIN',
                'If_VicGotPepBecomeSeropoAfterOneMonth', 
                'CommentVicGotPepBecomeSeropoAfterOneMonth',
                'If_VicGotTreatAgainsIstTesLaboPosi', 
                'CommentVicGotTreatAgainsIstTesLaboPosi',
                'If_VicWasPregnantINviolFakeCouche', 
                 'CommentVicWasPregnantINviolFakeCouche', 
                'If_VicGotFistuleWasRepared',
                'CommentVicGotFistuleWasRepared',
                'Observations', 
                'DateVisiTe',
                'PartenaireRespo', 
                'If_VicWasSeronegaGotPepINSeventyTwoSp', 
                'CommentVicWasSeronegaGotPepINSp', 
                'If_VicGotPepBecomeSeropoAfterTreeMonthSp',
                'CommentVicGotPepBecomeSeropoAfterTreeMonthSp',
                'If_VicGotTreatAgainsIstTesLaboPosiSp', 
                'CommentVicGotTreatAgainsIstTesLaboPosiSp',
                'If_VicWasPregnantINviolFakeCoucheSp',
                'CommentVicWasPregnantINviolFakeCoucheSp',
                'If_VicGotFistuleWasReparedSp', 
                'CommentVicGotFistuleWasReparedSp',
                'ObservationsSp',
                'DateVisiTeSp', 
                'PartenaireRespoSp', 
                'Id_patient',  )    
        
        
class CertificatMedSerialize(serializers.ModelSerializer):
    class Meta:  
        name='CertificatMed',
        fields=(
                'Id_Certificat',
                'SigneExamenGeneral', 
                'SigneExamenPhysiqueGeneral',
                'SigneExamenGenital',
                'SigneExamenParaDinique', 
                'SingeEvalueRisqueGrossesse',
                'SigneEtatVicSortie',
                'SignePronostic', 
                'SigneCAT',
                'SigneConclusion', 
                'NomClincien',
                'SignatureClinicien', 
                'NomStructure', 
                'AdressePhysiqueStru', 
                'NumerotelStructure', 
                'Email',
                'Id_patient',  )   
        
        
class  AuthorsProfileSerialize(serializers.ModelSerializer):
            model=AuthorsProfile
            fields=(
                'Id_authors', 
                'NombreAgresseurs', 
                'If_PersoWithWeapons', 
                'If_Civil',
                'If_Inconnu', 
                'AgeAuteurs',
                'SexeAuteurs', 
                'DesCriptionPhysique',
                'If_RelationWithVictimes', 
                'If_FamilyMember', 
                'If_neigbour', 
                'If_connaissance', 
                'autherR',
                'If_AfraidBackofHome', 
                'If_IntimidateDeath',
                'DateAgression', 
                'TimeAgression', 
                'NumberIncidentVictime',
                'DescriptionAgressionB', 
                'Circonstance', 
                'ViolenceType',
                'If_Pillage',
                'NotionContrainte', 
                'OtherPresentVicNumber',
                'Id_patient',   ) 

class AntecedentVictimSerialize(serializers.ModelSerializer):
    class Meta:
        model=AntecedentVictim
        fields=(
                 'Id_AntMed',
                'Contraception',
                'ContraceptionPasSur',
                'ContraceptionComment',
                'ContracePilule',
                'ContracePilulePasSur',
                'ContracePiluleComment',
                'ContraceSterilet',
                'ContraceSteriletPasSur',
                'ContraceSteriletComment', 
                'ContraceInjection',
                'ContraceInjectionPasSur', 
                'ContraceInjectionComment', 
                'ContraceOtherForspecify', 
                'ContraceOtherForspecifyComment', 
                'Mutilation',
                'MutilationPasSur',
                'MutilationComment',
                'IF_MutilationHistoricType', 
                'If_DateLastRegles',
                'If_DateLastReglesPasSur',
                'DateLastReglesComment', 
                'If_RegleDuringAgression', 
                'If_RegleDuringAgressionPasSur', 
                'RegleDuringAgressionComment', 
                'If_BleedDuringAgression', 
                'If_BleedDuringAgressionPasSur',
                'BleedDuringAgressionComment', 
                'Parite',
                'Gestite',
                'Avortement', 
                'Deces', 
                'ProblemesSanteExistant', 
                'AlergisConnu',
                'TookAlcoolBeforeAgression', 
                'TookAlcoolAfterAgression',
                'TookAlcoolofthenAgression',
                'TookMedicinsBeforeAgression',
                'TookMedicinsAfterAgression', 
                'TookMedicinsofthenAgression', 
                'TookDragsBeforeAgression',
                'TookDragssAfterAgression', 
                'TookDragssofthenAgression',
                'Id_patient'   )                 
           
                         
        
    
